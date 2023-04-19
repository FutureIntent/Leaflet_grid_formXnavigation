import styled from 'styled-components';
import { SpaceProps } from 'styled-system';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

const StyledHr = styled.hr`
    background-color: var(--grey);
    border: 0;
    height: 1px;
    margin: 0;
    padding: 0;
    width: 100%;
`;

const Hr = ({ text, ...rest }: { text?: string } & SpaceProps) => (
    <Box display="flex" flexWrap="nowrap" alignItems="center" {...rest}>
        <StyledHr />
        {Boolean(text) && (
            <>
                <Typography
                    variant="paragraph"
                    color="var(--grey-dark)"
                    px="10px"
                    hideOverflow={false}
                >
                    {text}
                </Typography>
                <StyledHr />
            </>
        )}
    </Box>
);

export default Hr;
