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
import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';

import Tab from '@components/molecules/Tab';

const StyledTabs = styled(Tabs)`
    display: flex;
`;

const StyledTabsContent = styled.div`
    display: flex;
    height: 100%;
    margin-left: 1rem;
    padding-top: 2rem;
    width: 100%;

    ${mediaQueries.tablet} {
        margin-left: 3.5rem;
    }
`;

const StyledTabList = styled(TabList)`
    li {
        cursor: pointer;
    }

    li:not(:last-of-type) {
        margin-bottom: 1.25rem;
    }
`;

const StyledTab = styled(Tab)`
    cursor: pointer;
`;

const DesktopTabs = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <StyledTabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <Box boxShadow={theme.shadows.card} minWidth="17.5rem" p="1.75rem 0 12.5625rem">
                <StyledTabList>
                    <StyledTab title="Local Therapy" caption="X˚Cryo" isActive={tabIndex === 0}>
                        <Image layout="responsive" src={XCryoProduct} alt="X˚Cryo" />
                    </StyledTab>
                    <StyledTab title="Face Therapy" caption="X˚Cryo Mask" isActive={tabIndex === 1}>
                        <Image layout="responsive" src={MaskProduct} alt="X˚Cryo Mask" />
                    </StyledTab>
                    <StyledTab title="Body Therapy" caption="X˚Tone" isActive={tabIndex === 2}>
                        <Image layout="responsive" src={XToneProduct} alt="X˚Tone" />
                    </StyledTab>
                    <StyledTab
                        title="Full-body Therapy"
                        caption="X˚Cabin"
                        isActive={tabIndex === 3}
                    >
                        <Image layout="responsive" src={CryoCabinProduct} alt="X˚Cabin" />
                    </StyledTab>
                    <StyledTab title="Skin Therapy" caption="X˚Boosters" isActive={tabIndex === 4}>
                        <Image layout="responsive" src={MaskProduct} alt="X˚Boosters" />
                    </StyledTab>
                </StyledTabList>
            </Box>
            <StyledTabsContent>
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
            </StyledTabsContent>
        </StyledTabs>
    );
};

export default DesktopTabs;
