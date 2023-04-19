import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import CryoSanityClient from '@services/sanity/sanity';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';

import theme from '@theme/configs';

import BackgroundOverlay from '@components/atoms/BackgroundOverlay';
import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';

const Poster = ({ poster, title }: { poster: SanityImageSource; title: string }) => {
    const imageProps = useNextSanityImage(CryoSanityClient, poster);

    return (
        <Box position="relative" aspectRatio={1920 / 600}>
            {poster && (
                <Box
                    position="absolute"
                    width="100%"
                    height="100%"
                    zIndex={theme.zIndices.stepBack}
                >
                    <BackgroundOverlay />
                    <Image
                        src={imageProps.src}
                        loader={imageProps.loader}
                        layout="fill"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        alt="poster"
                        quality={100}
                    />
                </Box>
            )}
            <Box display="flex" justifyContent="center" flexDirection="column" height="100%">
                <GridParent>
                    <GridChild gridColumn={{ _: 'span 12', laptopS: '4/ span 6' }}>
                        <Typography
                            variant="caption"
                            color="var(--grey-dark)"
                            transformText="uppercase"
                        >
                            Blogs / {title}
                        </Typography>
                        <Typography variant="h1" color="var(--white)">
                            {title}
                        </Typography>
                        <Typography variant="paragraph" color="var(--white)">
                            For the first time there is now technology that will improve the muscle
                            tone and firmness simultaneously with efficient fat removal.
                        </Typography>
                    </GridChild>
                </GridParent>
            </Box>
        </Box>
    );
};

export default Poster;
