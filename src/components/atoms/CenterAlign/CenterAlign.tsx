import styled from 'styled-components';

import Box, { BoxProps } from '@components/atoms/Box';

interface CenterAlignPops {
    axis?: 'x' | 'y' | 'xy';
}

export const CenterAlign = styled(Box).attrs(({ axis = 'xy' }: CenterAlignPops) => ({
    axis,
}))<BoxProps>`
    ${({ axis }) => (axis !== 'x' ? 'align-items: center' : null)};
    ${({ axis }) => (axis !== 'y' ? 'justify-content: center' : null)};

    display: flex;
    height: 100%;
    width: 100%;
`;
