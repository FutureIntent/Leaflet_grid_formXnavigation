import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

import { mediaSizes } from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Hr from '@components/atoms/Hr';
import Typography from '@components/atoms/Typography';

import Cart from '@components/molecules/Cart';

import { dummyProducts } from '../../../../dummyData/dummyData';

const StyledAccordionHeader = styled(AccordionSummary)`
    padding: 25px 30px;

    & .MuiAccordionSummary-content {
        margin: 0;
    }
`;

const Products = () => {
    const { t } = useTranslation();
    const isWiderThenTablet = useMediaQuery({ query: mediaSizes.laptopS });

    if (isWiderThenTablet) {
        return (
            <Cart>
                <Cart.Header title={t('Products')} />
                {dummyProducts.map((product) => (
                    <>
                        <Cart.Item editable={false} {...product} />
                        <Hr />
                    </>
                ))}
                <Cart.Footer>
                    <Box display="flex" justifyContent="space-between" mt={18}>
                        <Typography variant="accent" color="var(--blue-brand)">
                            Total
                        </Typography>
                        <Typography variant="accent" color="var(--blue-brand)">
                            1168.99$
                        </Typography>
                    </Box>
                </Cart.Footer>
            </Cart>
        );
    }

    return (
        <div>
            <Cart>
                <Accordion disableGutters elevation={0}>
                    <StyledAccordionHeader
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Cart.Header title={t('Products')} />
                    </StyledAccordionHeader>

                    <AccordionDetails>
                        {dummyProducts.map((product) => (
                            <>
                                <Cart.Item editable={false} {...product} />
                                <Hr />
                            </>
                        ))}
                        <Cart.Footer>
                            <Box display="flex" justifyContent="space-between" mt={18}>
                                <Typography variant="accent" color="var(--blue-brand)">
                                    Total
                                </Typography>
                                <Typography variant="accent" color="var(--blue-brand)">
                                    1168.99$
                                </Typography>
                            </Box>
                        </Cart.Footer>
                    </AccordionDetails>
                </Accordion>
            </Cart>
        </div>
    );
};

export default Products;
