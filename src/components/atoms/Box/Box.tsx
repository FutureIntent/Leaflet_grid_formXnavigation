import { props as defaultFilteredProps } from '@styled-system/should-forward-prop';
import styled from 'styled-components';
import * as system from 'styled-system';

export interface BoxProps
    extends system.SpaceProps,
        system.LayoutProps,
        system.FlexboxProps,
        system.GridProps,
        system.BorderProps,
        system.ShadowProps,
        system.PositionProps,
        system.GridGapProps,
        system.TextAlignProps,
        system.BoxShadowProps,
        system.ColorProps {}

const Box = styled.div.withConfig({
    shouldForwardProp: (prop) =>
        ![...defaultFilteredProps, 'aspectRatio', 'cursor'].includes(String(prop)),
})<BoxProps & { cursor?: string; aspectRatio?: number }>`
    ${system.space};
    ${system.color};
    ${system.layout};
    ${system.flexbox};
    ${system.grid};
    ${system.border};
    ${system.shadow};
    ${system.position};
    ${system.textAlign};
    ${system.typography};
    ${system.boxShadow};
    aspect-ratio: ${({ aspectRatio }) => aspectRatio};

    ${({ cursor }) =>
        cursor &&
        `
        cursor: ${cursor};
    `};
`;

export default Box;
