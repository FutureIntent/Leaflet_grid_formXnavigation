import { ReactElement } from 'react';

import { CardSize } from '@components/atoms/Card/Card';
import Typography from '@components/atoms/Typography';

import { TherapyCardProps } from '@components/molecules/TherapyCard/TherapyCardInterface';

const Heading = ({
    heading,
    size,
}: Pick<TherapyCardProps, 'size' | 'heading'>): ReactElement | null => {
    if (!heading) return null;

    return (
        <Typography variant={size === CardSize.small ? 'accent' : 'h3'} color="var(--black-brand)" whiteSpace='nowrap'>
            {heading}
        </Typography>
    );
};

export default Heading;
