import { useMediaQuery } from 'react-responsive';

import { mediaSizes } from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import { CardLayout, CardSize } from '@components/atoms/Card/Card';
import Typography from '@components/atoms/Typography';

import TherapyCard from '@components/molecules/TherapyCard';
import { TherapyCardProps } from '@components/molecules/TherapyCard/TherapyCardInterface';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';

const Cryotherapies = ({
    therapies,
    blockTitle,
}: {
    therapies: TherapyCardProps[];
    blockTitle: string;
}) => {
    const isWiderThenTablet = useMediaQuery({ query: mediaSizes.tablet });

    return (
        <GridParent>
            <GridChild gridColumn={{ _: 'span 12', laptopS: '2/ span 10' }}>
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
                </Box>
                <Box
                    display="grid"
                    gridTemplateColumns="repeat(auto-fit,minMax(290px, 1fr))"
                    gridGap="1.25rem"
                    p="16px 0 140px"
                >
                    {therapies.map((therapy) => (
                        <TherapyCard
                            layout={isWiderThenTablet ? CardLayout.vertical : CardLayout.horizontal}
                            size={isWiderThenTablet ? CardSize.medium : CardSize.small}
                            key={therapy.therapyName}
                            img={therapy.img}
                            heading={therapy.heading}
                            therapyName={therapy.therapyName}
                            duration={therapy.duration}
                            posterAspectRatio={isWiderThenTablet ? 360 / 200 : 85 / 90}
                            placesAmount={therapy.placesAmount}
                        />
                    ))}
                </Box>
            </GridChild>
        </GridParent>
    );
};

export default Cryotherapies;
