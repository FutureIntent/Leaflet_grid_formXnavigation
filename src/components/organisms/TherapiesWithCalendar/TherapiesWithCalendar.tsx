import SlidingCards from '@components/routes/Home/SlidingCards';
import { useMediaQuery } from 'react-responsive';

import { mediaSizes } from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Calendar from '@components/atoms/Calendar';
import { CardSize } from '@components/atoms/Card/Card';

import TherapyCard from '@components/molecules/TherapyCard';

import GridChild from '@components/templates/GridChild';

const TherapiesWithCalendar = ({ therapies }: { therapies: any }) => {
    const isWiderThenTablet = useMediaQuery({ query: mediaSizes.tablet });

    return (
        <>
            <GridChild gridColumn={{ _: 'span 12', laptopS: '3/ span 6' }}>
                <Box
                    display={{ _: 'flex', tablet: 'grid' }}
                    gridGap={{ _: '', tablet: '30px' }}
                    gridTemplateColumns={{ _: '', tablet: 'repeat(auto-fill, minMax(280px, 1fr))' }}
                    flexWrap={{ _: 'nowrap', tablet: 'wrap' }}
                >
                    {isWiderThenTablet ? (
                        therapies.map((card: any) => (
                            <TherapyCard key={card.heading} {...card} size={CardSize.small} />
                        ))
                    ) : (
                        <SlidingCards cards={therapies} type="showAll" narrow />
                    )}
                </Box>
            </GridChild>
            <GridChild
                pb={{ _: 55, tablet: 'unset' }}
                gridColumn={{ _: 'span 12', tablet: 'span 2' }}
                gridRow={{ _: '2', tablet: 'unset' }}
            >
                <Calendar />
            </GridChild>
        </>
    );
};

export default TherapiesWithCalendar;
