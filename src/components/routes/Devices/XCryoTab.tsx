import XCryoKnee from '@public/images/devices/cryo_knee.jpg';
import XCryoProduct from '@public/images/devices/product_xcryo.png';
import Image from 'next/image';
import { ReactElement } from 'react';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import Typography from '@components/atoms/Typography';

const StyledSmallImg = styled.div`
    aspect-ratio: 1;
    height: 100%;
    max-height: 200px;
    position: absolute;
    transform: translate(55%, 5%);

    ${mediaQueries.tablet} {
        aspect-ratio: 207/296;
        max-height: 296px;
        transform: translate(55%, 10%);
    }

    ${mediaQueries.laptopS} {
        max-height: 437px;
        transform: translate(90%, 10%);
        width: 70%;
    }
`;

const ImageContainer = styled.div`
    aspect-ratio: 195/222;
    max-width: 195px;
    position: relative;
    width: 100%;

    ${mediaQueries.tablet} {
        aspect-ratio: 251/420;
        margin-right: 12%;
        max-width: 251px;
    }

    ${mediaQueries.laptopS} {
        aspect-ratio: 435/680;
        margin-right: 20%;
        max-width: 435px;
    }
`;

const XCryoTab = (): ReactElement => (
    <Box
        position="relative"
        display="flex"
        maxWidth={{ _: '100%', laptopS: '1210px' }}
        flexDirection={{ _: 'column', tablet: 'row' }}
        justifyContent="space-between"
        mr={{ _: '0', tablet: '3rem', laptopS: '5rem' }}
        mb={{ _: '8.5rem', laptopS: '0' }}
    >
        <ImageContainer>
            <Image layout="fill" objectFit="cover" src={XCryoKnee} alt="XCryo" />
            <StyledSmallImg>
                <Image layout="fill" objectFit="contain" src={XCryoProduct} alt="XCryo" />
            </StyledSmallImg>
        </ImageContainer>
        <Box
            width={{ _: '100%', laptopS: '60%' }}
            position="relative"
            p={{ _: '1.1rem 1rem', tablet: 'unset', laptopS: '80px 0 0' }}
        >
            <Typography display={{ _: 'none', tablet: 'block' }} variant="h2">
                Full-body therapy
            </Typography>
            <Typography variant="paragraph2" mt="1rem" color="var(--black-brand)">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata
            </Typography>
            <Typography variant="paragraph2" mt="0.75rem" color="var(--black-brand)">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </Typography>
            <Box display="flex" mt="1.75rem" flexDirection={{ _: 'column', tablet: 'row' }}>
                <Button variant="primary">
                    <Typography variant="accent">Get Started</Typography>
                </Button>
            </Box>
        </Box>
    </Box>
);

export default XCryoTab;
