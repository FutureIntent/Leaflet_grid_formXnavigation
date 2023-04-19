import { ReactNode } from 'react';

import Box from '@components/atoms/Box';
import Card, { CardElevation } from '@components/atoms/Card/Card';
import Typography from '@components/atoms/Typography';

const IconCard = ({
    icon,
    label,
    elevation = CardElevation.small,
    alignCenter = false,
}: {
    icon: ReactNode;
    label: string;
    elevation?: CardElevation;
    alignCenter?: boolean;
}) => (
    <Card elevation={elevation}>
        <Box
            p={16}
            display="flex"
            alignItems="center"
            justifyContent={alignCenter ? 'center' : 'flex-start'}
        >
            {icon}
            <Typography variant="accent" color="var(--black-brand)" ml={18}>
                {label}
            </Typography>
        </Box>
    </Card>
);

export default IconCard;
