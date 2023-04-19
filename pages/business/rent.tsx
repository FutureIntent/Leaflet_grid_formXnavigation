import DesktopTabs from '@components/routes/Business/RentDevice/Tabs/DesktopTabs';
import MobileTabs from '@components/routes/Business/RentDevice/Tabs/MobileTabs';
import { useIsMounted } from '@hooks';
import i18nextConfig from 'next-i18next.config';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ReactElement } from 'react';

import { FromLaptop, TillLaptop } from '@hooks/useActiveViewportSize';

import Box from '@components/atoms/Box';

const Rent = (): ReactElement | null => {
    const isMounted = useIsMounted();

    if (!isMounted) return null;

    return (
        <Box mb={140}>
            <FromLaptop>
                <DesktopTabs />
            </FromLaptop>
            <TillLaptop>
                <MobileTabs />
            </TillLaptop>
        </Box>
    );
};

export default Rent;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['therapies', 'auth'], i18nextConfig)),
    },
});
