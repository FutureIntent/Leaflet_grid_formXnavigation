import BusinessTypeSwitch from '@components/routes/Business/BusinessTypeSwitch/BusinessTypeSwitch';
import PartnerForm from '@components/routes/Business/PartnerForm/PartnerForm';
import IceBg from '@public/images/business/business_bg.jpg';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { useState } from 'react';

import theme from '@theme/configs';

import BackgroundOverlay from '@components/atoms/BackgroundOverlay';
import Box from '@components/atoms/Box';
import Card from '@components/atoms/Card';
import Typography from '@components/atoms/Typography';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';

import i18nextConfig from '../../next-i18next.config';
import { BusinessType } from '../../src/types/Business';

const BecomePartner = () => {
    const { t } = useTranslation();
    const [businessType, setBusinessType] = useState<BusinessType>(BusinessType.company);

    return (
        <Box display="flex" position="relative">
            <Box
                position="absolute"
                aspectRatio={16 / 9}
                height={500}
                width="100%"
                zIndex={theme.zIndices.stepBack}
            >
                <BackgroundOverlay />
                <Image placeholder="blur" layout="fill" objectFit="cover" src={IceBg} />
            </Box>
            <GridParent>
                <GridChild gridColumn={{ _: 'span 12', laptopS: '5/ span 4' }} pt={50}>
                    <Typography
                        variant="h2"
                        color="var(--white)"
                        transformText="uppercase"
                        textAlign="center"
                        px={70}
                    >
                        {t('ENHANCE YOUR BUSINESS WITH CRYO˚CENTER')}
                    </Typography>
                    <Typography
                        variant="paragraph"
                        color="var(--white)"
                        mt={12}
                        mb={8}
                        textAlign="center"
                    >
                        {t('You are:')}
                    </Typography>
                    <BusinessTypeSwitch value={businessType} handleSwitch={setBusinessType} />
                </GridChild>
                <GridChild gridColumn={{ _: 'span 12', laptopS: '5/ span 4' }} mt={30}>
                    <Card p={30}>
                        <PartnerForm businessType={businessType} />
                    </Card>
                </GridChild>
            </GridParent>
        </Box>
    );
};

export default BecomePartner;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['therapies', 'auth'], i18nextConfig)),
    },
});
