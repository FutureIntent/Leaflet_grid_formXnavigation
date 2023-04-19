import SectionLink from '@components/routes/Business/HowItWorks/shared/SectionLink';
import MyCryoDevices from '@components/routes/Business/MyOperations/MyCryoDevices';
import MyFacilities from '@components/routes/Business/MyOperations/MyFacilities';
import OrderHistory from '@components/routes/Business/MyOperations/OrderHistory';
import ProcessingOrders from '@components/routes/Business/MyOperations/ProcessingOrders';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Box from '@components/atoms/Box';

import Drawer from '@components/molecules/Drawer/Drawer';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';

import i18nextConfig from '../../next-i18next.config';

const MyOperations = () => {
    const { t } = useTranslation();

    return (
        <Box>
            <Drawer>
                <Box p="15px 0 15px 45px">
                    <SectionLink label={t('PROCESSING')} link="processing" />
                    <SectionLink label={t('MY CRYO˚DEVICES')} link="myDevices" />
                    <SectionLink label={t('MY FACILITIES')} link="myFacilities" />
                    <SectionLink label={t('HISTORY')} link="history" />
                </Box>
            </Drawer>
            <GridParent>
                <GridChild gridColumn={{ _: 'span 12', laptopS: '3/ span 8' }} mt={60} mb={200}>
                    <ProcessingOrders />
                    <MyCryoDevices />
                    <MyFacilities />
                    <OrderHistory />
                </GridChild>
            </GridParent>
        </Box>
    );
};

export default MyOperations;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['therapies', 'auth'], i18nextConfig)),
    },
});
