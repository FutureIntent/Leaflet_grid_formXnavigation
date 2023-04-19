import { Link } from 'react-scroll';
import styled from 'styled-components';

import Typography from '@components/atoms/Typography';

const StyledLink = styled(Link)`
    align-items: center;
    display: flex;
    height: 40px;
    transition: border 0.1s ease-in-out;

    &.is-current {
        border-right: 4px solid var(--blue-brand);

        p {
            color: var(--blue-brand);
        }
    }
`;

const SectionLink = ({ label, link }: { label: string; link: string }) => (
    <StyledLink
        activeClass="is-current"
        to={link}
        offset={-240}
        duration={1000}
        spy
        smooth
        href={`#${link}`}
    >
        <Typography variant="caption" as="p" color="var(--black-brand)">
            {label}
        </Typography>
    </StyledLink>
);

export default SectionLink;
