import { ReactElement } from 'react';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import Time from '@components/molecules/Icons/home/Time';
import { TherapyCardProps } from '@components/molecules/TherapyCard/TherapyCardInterface';

const Duration = ({ duration }: Pick<TherapyCardProps, 'duration'>): ReactElement | null => {
    if (!duration) return null;

    return (
        <Box display="flex" alignContent="center" width="50%">
            <Time color="var(--blue-brand)" />
            <Box display="flex" alignItems="center">
                <Typography variant="caption" color="var(--blue-brand)" ml="10px">
                    {duration}
                </Typography>
            </Box>
        </Box>
    );
};

export default Duration;
