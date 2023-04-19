import { ReactElement } from 'react';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import Facility from '@components/molecules/Icons/home/Facility';
import { TherapyCardProps } from '@components/molecules/TherapyCard/TherapyCardInterface';

const Places = ({ placesAmount }: Pick<TherapyCardProps, 'placesAmount'>): ReactElement | null => {
    if (!placesAmount) return null;

    return (
        <Box display="flex" alignContent="center" width="50%">
            <Facility color="var(--blue-brand)" />
            <Box display="flex" alignItems="center">
                <Typography variant="caption" color="var(--blue-brand)" ml="10px">
                    {placesAmount}
                </Typography>
            </Box>
        </Box>
    );
};

export default Places;
