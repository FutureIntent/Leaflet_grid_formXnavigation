import { ReactElement } from 'react';

import Box from '@components/atoms/Box';
import LabeledField from '@components/atoms/LabeledField';

import Calendar from '@components/molecules/Icons/Calendar';
import { TherapyCardProps } from '@components/molecules/TherapyCard/TherapyCardInterface';

const DateTime = ({ dateTime }: Pick<TherapyCardProps, 'dateTime'>): ReactElement | null => {
    if (!dateTime) return null;

    return (
        <Box display="flex" alignItems="center" mb="10px">
            <Calendar size="large" color="var(--grey-dark)" />
            <Box ml="10px">
                <LabeledField
                    label={dateTime.toLocaleDateString('en-GB', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                    value={dateTime.toLocaleDateString('en-GB', {
                        weekday: 'long',
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                />
            </Box>
        </Box>
    );
};

export default DateTime;
