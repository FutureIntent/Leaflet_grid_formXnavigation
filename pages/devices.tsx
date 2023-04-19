import DesktopTabs from '@components/routes/Devices/Tabs/DesktopTabs';
import MobileTabs from '@components/routes/Devices/Tabs/MobileTabs';
import { useIsMounted } from '@hooks';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ReactElement } from 'react';

import { FromLaptop, TillLaptop } from '@hooks/useActiveViewportSize';

import i18nextConfig from '../next-i18next.config';

const Devices = (): ReactElement | null => {
    const isMounted = useIsMounted();

    if (!isMounted) return null;

    return (
        <>
            <FromLaptop>
                <DesktopTabs />
            </FromLaptop>
            <TillLaptop>
                <MobileTabs />
            </TillLaptop>
        </>
    );
};

export default Devices;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['therapies', 'auth'], i18nextConfig)),
    },
});
