import MuiMenuItem from '@mui/material/MenuItem';
import { ReactNode } from 'react';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import Link from '@components/atoms/Link';
import Typography from '@components/atoms/Typography';

const StyledMenuItem = styled(MuiMenuItem)`
    align-items: center;
    border-radius: ${({ theme }) => theme.space['2xs']};
    box-shadow: ${({ theme }) => theme.shadows.card};
    height: 100px;
    justify-content: center;
    padding: 10px;
    width: 100px;

    &:not(:last-of-type) {
        margin-right: 10px;
    }
`;

const MenuItem = ({ link, icon, label }: { link: string; icon: ReactNode; label: string }) => (
    <StyledMenuItem>
        <Link href={link}>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                {icon}
                <Typography variant="caption" color="var(--black-brand)">
                    {label}
                </Typography>
            </Box>
        </Link>
    </StyledMenuItem>
);

export default MenuItem;
