import Box from '@components/atoms/Box';
import Card from '@components/atoms/Card';
import { CardLayout, CardSize } from '@components/atoms/Card/Card';
import Duration from '@components/atoms/Card/components/Duration';
import FacilityInfo from '@components/atoms/Card/components/FacilityInfo';
import Heading from '@components/atoms/Card/components/Heading';
import Places from '@components/atoms/Card/components/Places';
import Poster from '@components/atoms/Card/components/Poster';
import SubTitle from '@components/atoms/Card/components/SubTitle';
import Tags from '@components/atoms/Card/components/Tags';

import { TherapyCardProps } from '@components/molecules/TherapyCard/TherapyCardInterface';

const TherapyCard = ({
    size = CardSize.large,
    layout = CardLayout.vertical,
    heading,
    address,
    therapyName,
    dateTime,
    tags,
    duration,
    placesAmount,
    devices,
    agents,
    ...posterProps
}: TherapyCardProps) => (
    <Card layout={layout} size={size}>
        <Poster layout={layout} {...posterProps} size={size} />
        <Box p={layout === CardLayout.horizontal ? '5px 10px' : '15px 25px'} flexGrow={1}>
            <Heading heading={heading} size={size} />
            <SubTitle subTitle={address || therapyName} size={size} />
            <Tags tags={tags} />
            <FacilityInfo devices={devices} agents={agents} />
            {(duration || placesAmount) && (
                <Box
                    display="flex"
                    justifyContent="space-between"
                    my={layout === CardLayout.horizontal ? '7px' : '1rem'}
                >
                    <Duration duration={duration} />
                    <Places placesAmount={placesAmount} />
                </Box>
            )}
        </Box>
    </Card>
);

export default TherapyCard;
