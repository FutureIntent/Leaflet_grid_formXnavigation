import { useSwiper } from '@hooks';
import { Stack } from '@mui/material';
import Image from 'next/image';
import poster from 'public/images/home/cryo_app_preview.jpg';
import { useState } from 'react';
import Swiper from 'swiper';

import theme from '@theme/configs';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import ArrowLeft from '@components/molecules/Icons/ArrowLeft';
import ArrowRight from '@components/molecules/Icons/ArrowRight';
import AppleStore from '@components/molecules/Icons/home/AppleStore';
import GoogleStore from '@components/molecules/Icons/home/GoogleStore';
import Slider, { SliderPagination } from '@components/molecules/Slider';

const Textontent = ({ title }: { title: string }) => (
    <Box
        width="100%"
        backgroundColor="var(--white)"
        p={{ _: '15px', tablet: '30px 40px', laptopS: '60px 40px 70px' }}
    >
        <Typography variant="h2" color="var(--black-brand)" mb={10}>
            CRYO˚CENTER MOBILE APP {title}
        </Typography>
        <Typography as="p" variant="accent" color="var(--black-brand)" mb={{ _: 14, laptopS: 40 }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </Typography>
        <Typography variant="caption" color="var(--grey-dark)">
            Also available in
        </Typography>
        <Stack direction="row" spacing="5px" mt="5px" mb={{ _: 20, laptopS: '130px' }}>
            <GoogleStore />
            <AppleStore />
        </Stack>
    </Box>
);

const HeroBanner = () => {
    const [firstSwiper, setFirstSwiper] = useState<Swiper | undefined>(undefined);
    const [secondSwiper, setSecondSwiper] = useState<Swiper | undefined>(undefined);
    const { nextSlide, prevSlide, sliderRef, sliderPaginationRef } = useSwiper();

    return (
        <Box pt={95} width="100%" display="flex" justifyContent="center" my="2rem" mb={140}>
            <Box
                display="flex"
                boxShadow={theme.shadows.card}
                flexDirection={{ _: 'column', laptopS: 'row' }}
                width="100%"
            >
                <Box width={{ _: '100%', laptopS: '60%' }} position="relative" aspectRatio={16 / 9}>
                    <Slider
                        showNumber
                        paginationRef={sliderPaginationRef}
                        slidesPerView={1}
                        sliderRef={sliderRef}
                        onSwiper={setFirstSwiper}
                        controller={{ control: secondSwiper }}
                    >
                        <Image src={poster} layout="fill" objectFit="cover" quality={100} />
                        <Image src={poster} layout="fill" objectFit="cover" quality={100} />
                    </Slider>
                </Box>
                <Box
                    width={{ _: '100%', laptopS: '40%' }}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                >
                    <div>
                        <Slider
                            effect="creative"
                            creativeEffect={{
                                prev: {
                                    shadow: false,
                                    translate: [0, 0, -400],
                                },
                                next: {
                                    translate: ['100%', 0, 0],
                                },
                            }}
                            onSwiper={setSecondSwiper}
                            controller={{ control: firstSwiper }}
                            slidesPerView={1}
                        >
                            <Textontent title="tpqeotqpeo" />
                            <Textontent title="vbwebqbwnqw6584nww684wr684" />
                        </Slider>
                    </div>

                    <Box
                        display="flex"
                        justifyContent="space-between"
                        p={{ _: '0 15px 45px ', tablet: '0 45px 70px' }}
                    >
                        <SliderPagination
                            bulletColor="var(--grey-dark)"
                            className="swiper-pagination"
                            ref={sliderPaginationRef}
                        />
                        <Box display="flex" alignItems="center">
                            <Box onClick={prevSlide} mr="43px">
                                <ArrowLeft color="var(--grey-dark)" />
                            </Box>
                            <Box onClick={nextSlide}>
                                <ArrowRight color="var(--grey-dark)" />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default HeroBanner;
