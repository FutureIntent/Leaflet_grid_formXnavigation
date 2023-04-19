import { Button } from '@mui/material';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import AppleStore from '@components/molecules/Icons/home/AppleStore';
import GoogleStore from '@components/molecules/Icons/home/GoogleStore';

import GridChild from '@components/templates/GridChild';

const StoreButton = styled(Button)`
    background-color: #091036;
    border: 1px solid var(--white);

    &:not(:last-of-type) {
        margin-right: 1rem;
    }
`;

const AppStores = () => (
    <GridChild gridColumn="2/ span 5">
        <Typography mt={25} mb={4} variant="caption" color="var(--grey-dark)">
            Also available in
        </Typography>
        <Box display="flex">
            <StoreButton>
                <GoogleStore />
            </StoreButton>
            <StoreButton>
                <AppleStore />
            </StoreButton>
        </Box>
    </GridChild>
);

export default AppStores;
