import ActionButtons from '@components/routes/Home/SlidingCards/ActionButtons';
import BlockHeading from '@components/routes/Home/blocks/BlockHeading';
import { useSwiper } from '@hooks';
import { nanoid } from 'nanoid';
import { useTranslation } from 'next-i18next';
import { ReactElement } from 'react';

import Badge from '@components/atoms/Badge';
import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import Map from '@components/molecules/Icons/home/Map';
import Slider from '@components/molecules/Slider';
import TherapyCard from '@components/molecules/TherapyCard';
import { TherapyCardProps } from '@components/molecules/TherapyCard/TherapyCardInterface';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';

const TherapyCardSlider = ({
    title,
    cards,
}: {
    title: string;
    cards: TherapyCardProps[];
}): ReactElement | null => {
    const { t } = useTranslation();
    const { sliderRef, nextSlide, prevSlide } = useSwiper();

    if (!cards.length) return null;

    return (
        <GridParent>
            <GridChild gridColumn={{ _: 'span 12', laptopS: '2/ span 10' }}>
                <Box
                    display="flex"
                    flexDirection={{ _: 'column', laptopS: 'row' }}
                    justifyContent="space-between"
                    flexWrap="wrap"
                >
                    <Box display="flex" alignItems="center">
                        <BlockHeading>{title}</BlockHeading>
                        <Badge variant="accent" color="var(--white)">
                            {cards.length}
                        </Badge>
                    </Box>

                    <Box display="flex" alignItems="center">
                        <Typography variant="accent" color="var(--blue-brand)" mr={10}>
                            {t('Show on map')}
                        </Typography>
                        <Map color="var(--blue-brand)" size="medium2" />
                        <ActionButtons nextSlide={nextSlide} prevSlide={prevSlide} />
                    </Box>
                </Box>
            </GridChild>

            <GridChild gridColumn={{ _: 'span 12', laptopS: '2/ span 10' }}>
                <Box padding={{ _: '1rem 0', tablet: '1.25rem 1.25rem 1.25rem 0' }}>
                    <Slider
                        shouldShrink
                        slidesPerView="auto"
                        spaceBetween={20}
                        sliderRef={sliderRef}
                        showOverflow
                    >
                        {cards.map((item) => (
                            <TherapyCard posterAspectRatio={435 / 180} key={nanoid()} {...item} />
                        ))}
                    </Slider>
                </Box>
            </GridChild>
        </GridParent>
    );
};

export default TherapyCardSlider;
