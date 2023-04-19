import XCryoTab from '@components/routes/Devices/XCryoTab';
import MaskProduct from '@public/images/devices/mask_product.png';
import CryoCabinProduct from '@public/images/devices/product_cryocabin.png';
import XCryoProduct from '@public/images/devices/product_xcryo.png';
import XToneProduct from '@public/images/devices/product_xtone.png';
import Image from 'next/image';
import { useState } from 'react';
import { TabList, TabPanel, Tabs } from 'react-tabs';
import styled from 'styled-components';

import theme from '@theme/configs';

import Box from '@components/atoms/Box';

import Slider from '@components/molecules/Slider';
import Tab from '@components/molecules/Tab';

const StyledTabList = styled(TabList)`
    padding-top: 1.75rem;
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

const StyledTab = styled(Tab)`
    cursor: pointer;
    margin-left: 1.5rem;
`;

const MobileTabs = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <Tabs selectedIndex={tabIndex}>
            <Box
                minWidth="17.5rem"
                overflow="hidden"
                mb={{ _: '1.25rem', tablet: '2.5rem' }}
                boxShadow={theme.shadows.card2}
            >
                <StyledTabList>
                    <Slider slidesPerView="auto" showOverflow spaceBetween={20}>
                        <StyledTab
                            title="Local Therapy"
                            caption="X˚Cryo"
                            isActive={tabIndex === 0}
                            handleClick={() => setTabIndex(0)}
                        >
                            <Image layout="responsive" src={XCryoProduct} alt="X˚Cryo" />
                        </StyledTab>
                        <StyledTab
                            title="Face Therapy"
                            caption="X˚Cryo Mask"
                            isActive={tabIndex === 1}
                            handleClick={() => setTabIndex(1)}
                        >
                            <Image layout="responsive" src={MaskProduct} alt="X˚Cryo Mask" />
                        </StyledTab>
                        <StyledTab
                            title="Body Therapy"
                            caption="X˚Tone"
                            isActive={tabIndex === 2}
                            handleClick={() => setTabIndex(2)}
                        >
                            <Image layout="responsive" src={XToneProduct} alt="X˚Tone" />
                        </StyledTab>
                        <StyledTab
                            title="Full-body Therapy"
                            caption="X˚Cabin"
                            isActive={tabIndex === 3}
                            handleClick={() => setTabIndex(3)}
                        >
                            <Image layout="responsive" src={CryoCabinProduct} alt="X˚Cabin" />
                        </StyledTab>
                        <StyledTab
                            title="Skin Therapy"
                            caption="X˚Boosters"
                            isActive={tabIndex === 4}
                            handleClick={() => setTabIndex(4)}
                        >
                            <Image layout="responsive" src={MaskProduct} alt="X˚Boosters" />
                        </StyledTab>
                    </Slider>
                </StyledTabList>
            </Box>
            <div>
                <TabPanel>
                    <XCryoTab />
                </TabPanel>
                <TabPanel>
                    <XCryoTab />
                </TabPanel>
                <TabPanel>
                    <XCryoTab />
                </TabPanel>
                <TabPanel>
                    <XCryoTab />
                </TabPanel>
                <TabPanel>
                    <XCryoTab />
                </TabPanel>
            </div>
        </Tabs>
    );
};

export default MobileTabs;
