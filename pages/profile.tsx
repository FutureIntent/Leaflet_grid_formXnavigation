import Account from '@components/routes/Profile/Account';
import Preferences from '@components/routes/Profile/Preferences';
import { useAppSelector } from '@hooks';
import { selectUser } from '@store/user/selectors';
import { props } from '@styled-system/should-forward-prop';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Tab as ReactTab, TabList, TabPanel, Tabs } from 'react-tabs';
import styled from 'styled-components';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';

import Slider from '@components/molecules/Slider';
import PhotoCropModal from '@components/molecules/UploadPhoto/PhotoCropModal';

import Box from '@components/atoms/Box';
import Container from '@components/atoms/Container';
import Hr from '@components/atoms/Hr';
import Typography from '@components/atoms/Typography';

import i18nextConfig from '../next-i18next.config';

enum MainSettings {
    account = 'Account',
    preferences = 'Preferences',
    partnerData = 'Partner data',
    payment = 'Payment',
}

const StyledTabList = styled(TabList)`
    position: relative;
    width: 100%;

    li {
        padding: 1rem 0;
        cursor: pointer;
    }

    li:not(:last-of-type) {
        margin-bottom: 1.25rem;
    }

    .swiper-slide {
        width: auto !important;
    }
`;

const StyledTab = styled(ReactTab).withConfig({
    shouldForwardProp: (prop) => ![...props, 'isActive'].includes(String(prop)),
})<{
    isActive: boolean;
}>`
  padding: 0;
  cursor: pointer;
  position: relative;

  ${({ isActive }) =>
      isActive &&
      `
        cursor: default;
        
        &:after {
              content: '';
              position: absolute;
              left: 0;
              bottom:0;
              background-color: var(--blue-brand);
              width: 100%;
              height: 4px;
        }
  `}
}
`;

const Profile = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const user = useAppSelector(selectUser);
    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        if (!user?.id) {
            router.push('/');
        }
    }, [user]);

    if (!user?.id) {
        return null;
    }

    return (
        <Box m="30px 0 140px">
            <Container>
                <Tabs selectedIndex={tabIndex} onSelect={() => {}}>
                    <GridParent>
                        <GridChild gridColumn={{ _: 'span 12', laptopS: '4/ span 6' }}>
                            <Typography variant="h3" transformText="uppercase">
                                {t('Profile settings')}
                            </Typography>
                            <Box overflow="hidden">
                                <StyledTabList>
                                    <Slider
                                        shouldShrink
                                        slidesPerView="auto"
                                        showOverflow
                                        spaceBetween={20}
                                    >
                                        {Object.values(MainSettings).map((setting, index) => (
                                            <StyledTab
                                                key={setting}
                                                isActive={tabIndex === index}
                                                onClick={() => setTabIndex(index)}
                                            >
                                                {setting}
                                            </StyledTab>
                                        ))}
                                    </Slider>
                                </StyledTabList>
                            </Box>
                            <Hr />
                        </GridChild>
                    </GridParent>
                    <GridParent>
                        <GridChild gridColumn={{ _: 'span 12', laptopS: '4/ span 6' }}>
                            <Box mt={20}>
                                <TabPanel>
                                    <Account />
                                </TabPanel>
                                <TabPanel>
                                    <Preferences />
                                </TabPanel>
                                <TabPanel>Partner data</TabPanel>
                                <TabPanel>Payment</TabPanel>
                            </Box>
                        </GridChild>
                    </GridParent>
                </Tabs>
            </Container>
            <PhotoCropModal />
        </Box>
    );
};

export default Profile;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['therapies', 'auth'], i18nextConfig)),
    },
});
