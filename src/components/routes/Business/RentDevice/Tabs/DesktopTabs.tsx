import XCryoRentTab from '@components/routes/Business/RentDevice/Tabs/XCryoRentTab';
import XMask from '@public/images/business/rent/cryomask.jpg';
import XCabin from '@public/images/business/rent/xcabin.jpg';
import Xcryo from '@public/images/business/rent/xcryo.jpg';
import Xtone from '@public/images/business/rent/xtone.jpg';
import MaskProduct from '@public/images/devices/mask_product.png';
import CryoCabinProduct from '@public/images/devices/product_cryocabin.png';
import XCryoProduct from '@public/images/devices/product_xcryo.png';
import XToneProduct from '@public/images/devices/product_xtone.png';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useState } from 'react';
import { TabList, TabPanel, Tabs } from 'react-tabs';
import styled from 'styled-components';

import theme from '@theme/configs';
import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import { SizePropsType } from '@components/atoms/Button/Button';
import Hr from '@components/atoms/Hr';
import Typography from '@components/atoms/Typography';

import Cart from '@components/molecules/Cart';
import Tab from '@components/molecules/Tab';

import { dummyProducts } from '../../../../../dummyData/dummyData';

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
    const { t } = useTranslation();
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <Box display="flex">
            <StyledTabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <Box boxShadow={theme.shadows.card} minWidth="17.5rem" p="1.75rem 0 12.5625rem">
                    <StyledTabList>
                        <StyledTab title="Local Therapy" caption="X˚Cryo" isActive={tabIndex === 0}>
                            <Image layout="responsive" src={XCryoProduct} alt="X˚Cryo" />
                        </StyledTab>
                        <StyledTab
                            title="Face Therapy"
                            caption="X˚Cryo Mask"
                            isActive={tabIndex === 1}
                        >
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
                        <StyledTab
                            title="Skin Therapy"
                            caption="X˚Boosters"
                            isActive={tabIndex === 4}
                        >
                            <Image layout="responsive" src={MaskProduct} alt="X˚Boosters" />
                        </StyledTab>
                    </StyledTabList>
                </Box>
                <StyledTabsContent>
                    <TabPanel>
                        <XCryoRentTab
                            name="Local-therapy"
                            title="X˚Cryo Original"
                            description="Best for health centers, sport resorts, clinics, gyms, and any other similar category."
                            prices={[316, 450, 799]}
                            link="#"
                            img={Xcryo}
                        />
                    </TabPanel>
                    <TabPanel>
                        <XCryoRentTab
                            name="Face Therapy"
                            title="X˚Cryo Mask"
                            description="Nachos can be tossed with tender lettuce, also try varnishing the pie with whiskey."
                            prices={[316, 450, 799]}
                            link="#"
                            img={XMask}
                        />
                    </TabPanel>
                    <TabPanel>
                        <XCryoRentTab
                            name="Body Therapy"
                            title="X˚Tone"
                            description="Best for health centers, sport resorts, clinics, gyms, and any other similar category."
                            prices={[316, 450, 799]}
                            link="#"
                            img={Xtone}
                        />
                    </TabPanel>
                    <TabPanel>
                        <XCryoRentTab
                            name="Full-Body Therapy"
                            title="X˚Cabin"
                            description="Nachos can be tossed with tender lettuce, also try varnishing the pie with whiskey."
                            prices={[316, 450, 799]}
                            link="#"
                            img={XCabin}
                        />
                    </TabPanel>
                    <TabPanel>
                        <XCryoRentTab
                            name="Skin Therapy"
                            title="X˚Boosters"
                            description="Tuna can be whisked with crusted chicory, also try enameling the pie with peppermint tea."
                            prices={[316, 450, 799]}
                            link="#"
                            img={Xtone}
                        />
                    </TabPanel>
                </StyledTabsContent>
            </StyledTabs>
            <Box
                display="inline-block"
                ml={30}
                pt="2rem"
                maxWidth={435}
                maxHeight={550}
                width="100%"
            >
                <Cart>
                    <Cart.Header title={t('Cart')} />
                    <Box display="flex" justifyContent="flex-start" flex={8} overflowY="auto">
                        <Box width="100%">
                            {dummyProducts.map((product) => (
                                <>
                                    <Cart.Item editable {...product} />
                                    <Hr />
                                </>
                            ))}
                        </Box>
                    </Box>
                    <Cart.Footer>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="flex-end"
                            flex={1}
                            mb={30}
                        >
                            <Box>
                                <Typography variant="caption" color="var(--blue-brand)">
                                    Total
                                </Typography>
                                <Typography as="p" variant="accent" color="var(--blue-brand)">
                                    1.637789 CC
                                </Typography>
                                <Typography variant="accent" color="var(--grey-dark)">
                                    (52.97 $)
                                </Typography>
                            </Box>
                            <Box>
                                <Button size={SizePropsType.auto}>
                                    <Typography variant="accent" color="var(--white)">
                                        Checkout
                                    </Typography>
                                </Button>
                            </Box>
                        </Box>
                    </Cart.Footer>
                </Cart>
            </Box>
        </Box>
    );
};

export default DesktopTabs;
