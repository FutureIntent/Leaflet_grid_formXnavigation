import { useSignOut } from '@services/auth/hooks';
import RouteMap from '@utils/RouteMap';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';

import Box from '../../atoms/Box';
import Footer from '../../organisms/Footer/Footer';
import Header from '../../organisms/Header/Header';

const Layout = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    const { mutate: signOut } = useSignOut();

    useEffect(() => {
        const syncLogout = (event: StorageEvent) => {
            if (event.key === 'logout') {
                signOut();
                router.push(RouteMap.home);
            }
        };

        window.addEventListener('storage', syncLogout);

        return () => {
            window.removeEventListener('storage', syncLogout);
        };
    }, [router, signOut]);

    return (
        <>
            <Header />
            <Box
                id="content"
                position="relative"
                minHeight="calc(100vh - var(--header-height) - var(--footer-height))"
                overflowX="hidden"
            >
                {children}
            </Box>
            <Footer />
        </>
    );
};

export default Layout;
