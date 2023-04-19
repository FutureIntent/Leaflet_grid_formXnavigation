import ActionButtons from '@components/routes/Home/SlidingCards/ActionButtons';
import { useSwiper } from '@hooks';
import routeMap from '@utils/RouteMap';
import { nanoid } from 'nanoid';
import { useTranslation } from 'next-i18next';
import { ReactElement } from 'react';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import { CardSize } from '@components/atoms/Card/Card';
import LinkWithArrow from '@components/atoms/LinkWithArrow';
import Typography from '@components/atoms/Typography';

import Map from '@components/molecules/Icons/home/Map';
import Slider from '@components/molecules/Slider';
import TherapyCard from '@components/molecules/TherapyCard';
import { TherapyCardProps } from '@components/molecules/TherapyCard/TherapyCardInterface';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';

const CardsAmountBadge = styled(Typography)`
    background-color: var(--blue-brand);
    border-radius: ${({ theme }) => theme.space['2xs']};
    display: inline-block;
    padding: 6px 15px;
`;

type ActionLink = 'map' | 'showAll';

interface SlidingCardsProps {
    cards: TherapyCardProps[];
    blockTitle?: string;
    icon?: ReactElement;
    type?: ActionLink;
    narrow?: boolean;
    cardSize?: CardSize;
}

const SlidingCards = ({
    cards,
    blockTitle,
    cardSize = CardSize.large,
    icon,
    type = 'map',
    narrow = false,
}: SlidingCardsProps) => {
    const { sliderRef, nextSlide, prevSlide } = useSwiper();
    const { t } = useTranslation();

    return (
        <>
            <GridParent>
                {blockTitle && (
                    <GridChild
                        gridColumn={{ _: 'span 12', laptopS: narrow ? '3/ span 8' : '2/ span 10' }}
                    >
                        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
                            <Box display="flex" alignItems="center">
                                <Typography
                                    transformText="uppercase"
                                    variant="h2"
                                    color="var(--black-brand)"
                                    lineHeight="47px"
                                    mr={10}
                                >
                                    {blockTitle}
                                </Typography>
                                <div>
                                    {icon}
                                    {type !== 'showAll' && (
                                        <CardsAmountBadge variant="accent" color="var(--white)">
                                            {cards.length}
                                        </CardsAmountBadge>
                                    )}
                                </div>
                            </Box>
                            <Box display="flex" alignItems="center">
                                {type === 'map' && (
                                    <>
                                        <Typography
                                            variant="accent"
                                            color="var(--blue-brand)"
                                            mr={10}
                                        >
                                            {t('Show on map')}
                                        </Typography>
                                        <Map color="var(--blue-brand)" />
                                    </>
                                )}

                                {type === 'showAll' && (
                                    <>
                                        <LinkWithArrow label={t('Show all')} to={routeMap.blog} />
                                        <CardsAmountBadge
                                            variant="accent"
                                            color="var(--white)"
                                            ml={10}
                                        >
                                            {cards.length}
                                        </CardsAmountBadge>
                                    </>
                                )}
                                <ActionButtons nextSlide={nextSlide} prevSlide={prevSlide} />
                            </Box>
                        </Box>
                    </GridChild>
                )}
                <GridChild
                    gridColumn={{ _: 'span 12', laptopS: narrow ? '3/ span 8' : '2/ span 10' }}
                >
                    <Box padding={{ _: '1rem 0', tablet: '1.25rem 1.25rem 1.25rem 0' }}>
                        <Slider
                            shouldShrink
                            slidesPerView="auto"
                            spaceBetween={20}
                            sliderRef={sliderRef}
                            showOverflow
                        >
                            {cards.map((item) => (
                                <TherapyCard
                                    posterAspectRatio={435 / 180}
                                    key={nanoid()}
                                    size={cardSize}
                                    {...item}
                                />
                            ))}
                        </Slider>
                    </Box>
                </GridChild>
            </GridParent>
        </>
    );
};

export default SlidingCards;
