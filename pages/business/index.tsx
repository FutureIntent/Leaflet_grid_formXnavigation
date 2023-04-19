import Balance from '@components/routes/Business/HowItWorks/Balance';
import CryoAndBusiness from '@components/routes/Business/HowItWorks/CryoAndBusiness';
import Markets from '@components/routes/Business/HowItWorks/Markets';
import Payment from '@components/routes/Business/HowItWorks/Payment';
import Pricing from '@components/routes/Business/HowItWorks/Pricing';
import Warranty from '@components/routes/Business/HowItWorks/Warranty';
import SectionLink from '@components/routes/Business/HowItWorks/shared/SectionLink';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Box from '@components/atoms/Box';

import Drawer from '@components/molecules/Drawer/Drawer';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';

import i18nextConfig from '../../next-i18next.config';

const Business = () => (
    <Box>
        <Drawer>
            <Box p="15px 0 15px 45px">
                <SectionLink label="CRYO & BUSINESS" link="cryoAndBusiness" />
                <SectionLink label="MARKETS" link="markets" />
                <SectionLink label="PRICING" link="pricing" />
                <SectionLink label="WARRANTY" link="warranty" />
                <SectionLink label="PAYMENT" link="payment" />
                <SectionLink label="CRYO˚BALANCE" link="cryoBalance" />
            </Box>
        </Drawer>
        <GridParent>
            <GridChild gridColumn={{ _: 'span 12', laptopS: '5/ span 4' }} mb={45}>
                <CryoAndBusiness />
                <Markets />
                <Pricing />
                <Warranty />
                <Payment />
                <Balance />
            </GridChild>
        </GridParent>
    </Box>
);

export default Business;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['therapies', 'auth'], i18nextConfig)),
    },
});
