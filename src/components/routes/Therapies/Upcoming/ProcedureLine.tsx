import { Stack } from '@mui/material';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import ProcedureTag from '@components/atoms/ProcedureTag';

const BackgroundLine = styled.div`
    background-color: var(--grey);
    height: 2px;
    margin-top: -1px;
    position: absolute;
    top: 50%;
    width: 100%;
    z-index: 0;
`;

const ProcedureLine = () => (
    <Box position="relative" display="inline-block" width="100%">
        <BackgroundLine />
        <Box display="flex" justifyContent="space-between" width="100%">
            <Stack direction="row" spacing={1}>
                <ProcedureTag label="Face" size="small" variant="disabled" />
                <ProcedureTag label="Face" size="small" variant="active" />
            </Stack>
            <Stack direction="row" spacing={1}>
                <ProcedureTag label="Face" size="small" variant="neutral" />
            </Stack>
        </Box>
    </Box>
);

export default ProcedureLine;
