import { props as defaultFilteredProps } from '@styled-system/should-forward-prop';
import styled from 'styled-components';
import { grid, space, GridProps, SpaceProps, layout, LayoutProps } from 'styled-system';

export type GridChildProps = GridProps & SpaceProps & LayoutProps;

const GridChild = styled.div.withConfig({
    shouldForwardProp: (prop) => ![...defaultFilteredProps, 'display'].includes(String(prop)),
})<GridChildProps>`
    ${grid};
    ${space};
    ${layout};

    max-width: 100%;
    position: relative;
`;

export default GridChild;
