import styled from 'styled-components';
import { grid, GridProps } from 'styled-system';

import mediaQueries from '@theme/configs/mediaQueries';

const GridParent = styled.div< 
    GridProps & { noGutter?: boolean; noGap?: boolean; aspectRatio?: number }
>`
    display: grid;
    grid-column-gap: ${({ noGap }) => (noGap ? 'unset' : '1rem')};
    grid-template-columns: repeat(12, 1fr);
    padding: 0px; //({ noGap }) => (noGap ? 'unset' : '1rem')
    position: relative;
    width: 100%;




    ${({ aspectRatio }) =>
        aspectRatio &&
        `
        aspect-ratio: ${aspectRatio};
  `}
    ${mediaQueries.tablet} {
        padding: 0px; //({ noGutter }) => (noGutter ? 0 : '0 2.8rem')
    }

    ${grid};
`;

export default GridParent;
