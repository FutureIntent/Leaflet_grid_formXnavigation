import PlanTabs from '@components/routes/Business/RentDevice/Tabs/PlanTabs';
import { useTranslation } from 'next-i18next';
import Image, { StaticImageData } from 'next/image';
import { useMediaQuery } from 'react-responsive';

import theme from '@theme/configs';
import { mediaSizes } from '@theme/configs/mediaQueries';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';

import BackgroundOverlay from '@components/atoms/BackgroundOverlay';
import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import { SizePropsType } from '@components/atoms/Button/Button';
import LinkWithArrow from '@components/atoms/LinkWithArrow';
import Typography from '@components/atoms/Typography';

interface RentTabProps {
    name: string;
    title: string;
    description: string;
    prices: [number, number, number];
    link: string;
    img: StaticImageData;
}

const XCryoRentTab = ({ name, title, description, prices, link, img }: RentTabProps) => {
    const { t } = useTranslation();
    const isWiderThenTablet = useMediaQuery({ query: mediaSizes.tablet });

    if (isWiderThenTablet) {
        return (
            <Box position="relative">
                <Box
                    position="absolute"
                    aspectRatio={745 / 480}
                    width="100%"
                    maxWidth={745}
                    height="100%"
                    zIndex={theme.zIndices.stepBack}
                >
                    <BackgroundOverlay />
                    <Image
                        placeholder="blur"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        src={img}
                    />
                </Box>
                <Box display="flex" p="2.5rem" maxWidth="745px" width="100%">
                    <Box width="50%">
                        <Typography
                            variant="caption"
                            color="var(--white)"
                            transformText="uppercase"
                            mb="0.3rem"
                        >
                            {name}
                        </Typography>
                        <Typography
                            variant="h2"
                            color="var(--white)"
                            transformText="uppercase"
                            mb="0.9rem"
                        >
                            {title}
                        </Typography>
                        <Typography variant="paragraph" color="var(--white)" mb="1rem">
                            {description}
                        </Typography>
                        <PlanTabs prices={prices} />
                        <Button size={SizePropsType.fullWidth} mt="1rem">
                            <Typography variant="accent" color="var(--white)">
                                {t('Add to cart')}
                            </Typography>
                        </Button>
                        <Typography
                            variant="caption"
                            color="var(--white)"
                            mt="1rem"
                            textAlign="center"
                        >
                            {t('Includes all applicators and training')}
                        </Typography>
                    </Box>
                    <Box width="50%" display="flex" justifyContent="flex-end">
                        <LinkWithArrow color="var(--white)" label={t('About device')} to={link} />
                    </Box>
                </Box>
            </Box>
        );
    }

    return (
        <GridParent>
            <GridChild gridColumn="span 12">
                <Box
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    boxShadow={theme.shadows.card}
                >
                    <Image placeholder="blur" layout="responsive" objectFit="cover" src={img} />
                    <Box p="1rem">
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography
                                variant="caption"
                                color="var(--grey-dark)"
                                transformText="uppercase"
                                mb="0.3rem"
                            >
                                {name}
                            </Typography>
                            <LinkWithArrow to={link} />
                        </Box>
                        <Typography
                            variant="h2"
                            color="var(--black-brand)"
                            transformText="uppercase"
                            mb="0.9rem"
                        >
                            {title}
                        </Typography>
                        <Typography variant="paragraph" color="var(--black-brand)" mb="1rem">
                            {description}
                        </Typography>
                        <PlanTabs prices={prices} />
                        <Button size={SizePropsType.fullWidth} mt="1rem">
                            <Typography
                                variant="accent"
                                color={{ _: 'var(--white)', tablet: 'var(--black-brand)' }}
                            >
                                {t('Add to cart')}
                            </Typography>
                        </Button>
                        <Typography
                            variant="caption"
                            color={{ _: 'var(--blue-brand)', tablet: 'var(--black-brand)' }}
                            mt="1rem"
                            textAlign="center"
                        >
                            {t('Includes all applicators and training')}
                        </Typography>
                    </Box>
                </Box>
            </GridChild>
        </GridParent>
    );
};

export default XCryoRentTab;
