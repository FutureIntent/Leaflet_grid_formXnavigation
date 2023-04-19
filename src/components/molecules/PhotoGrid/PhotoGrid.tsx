import { useSwiper } from '@hooks';
import testImg from '@public/images/test.jpg';
import Image from 'next/image';
import { ReactPhotoCollage } from 'react-photo-collage';
import { useMediaQuery } from 'react-responsive';

import { mediaSizes } from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';

import Slider from '@components/molecules/Slider';

const settings = {
    width: '100%',
    height: ['272px', '272px'],
    layout: [2, 3],
    photos: [
        { source: '/images/test.jpg' },
        { source: '/images/test.jpg' },
        { source: '/images/test.jpg' },
        { source: '/images/test.jpg' },
        { source: '/images/test.jpg' },
        { source: '/images/test.jpg' },
        { source: '/images/test.jpg' },
        { source: '/images/test.jpg' },
        { source: '/images/test.jpg' },
        { source: '/images/test.jpg' },
        { source: '/images/test.jpg' },
    ],
    showNumOfRemainingPhotos: true,
};

const PhotoGrid = () => {
    const { sliderRef } = useSwiper();
    const isWiderThenTablet = useMediaQuery({ query: mediaSizes.tablet });

    if (isWiderThenTablet) {
        return <ReactPhotoCollage {...settings} />;
    }

    return (
        <Slider slidesPerView={1.3} spaceBetween={20} sliderRef={sliderRef} showOverflow>
            <Box aspectRatio={225 / 152}>
                <Image placeholder="blur" layout="fill" objectFit="cover" src={testImg} />
            </Box>
            <Box aspectRatio={225 / 152}>
                <Image placeholder="blur" layout="fill" objectFit="cover" src={testImg} />
            </Box>
            <Box aspectRatio={225 / 152}>
                <Image placeholder="blur" layout="fill" objectFit="cover" src={testImg} />
            </Box>
            <Box aspectRatio={225 / 152}>
                <Image placeholder="blur" layout="fill" objectFit="cover" src={testImg} />
            </Box>
            <Box aspectRatio={225 / 152}>
                <Image placeholder="blur" layout="fill" objectFit="cover" src={testImg} />
            </Box>
            <Box aspectRatio={225 / 152}>
                <Image placeholder="blur" layout="fill" objectFit="cover" src={testImg} />
            </Box>
            <Box aspectRatio={225 / 152}>
                <Image placeholder="blur" layout="fill" objectFit="cover" src={testImg} />
            </Box>
        </Slider>
    );
};

export default PhotoGrid;
