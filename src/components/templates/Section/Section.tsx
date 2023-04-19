import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

const Section = styled.section<SpaceProps>`
    overflow-x: hidden;
    padding-bottom: 140px;
    ${space};
`;

export default Section;
