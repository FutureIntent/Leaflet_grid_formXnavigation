import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

import Link from '@components/atoms/Link';

import ArrowButton from '../../molecules/Icons/ArrowButton';
import Typography from '../Typography';

const StyledArrowBtn = styled(ArrowButton)<{ isBackBtn: boolean }>`
    margin-left: 0.5rem;
    vertical-align: middle;

    ${({ isBackBtn }) =>
        isBackBtn &&
        `
      transform: rotate(180deg);
  `}
`;

const StyledLink = styled(Link)<SpaceProps>`
    cursor: pointer;
    ${space}
`;

const LinkWithArrow = ({
    label,
    to,
    isBackBtn = false,
    color = 'var(--blue-brand)',
    ...rest
}: { label?: string; to: string; isBackBtn?: boolean; color?: string } & SpaceProps) => (
    <StyledLink href={to} {...rest}>
        <Typography variant="accent" color={color}>
            {isBackBtn && <StyledArrowBtn isBackBtn={isBackBtn} color={color} />}{' '}
            {Boolean(label) && `${label} `}
            {!isBackBtn && <StyledArrowBtn isBackBtn={isBackBtn} color={color} />}
        </Typography>
    </StyledLink>
);

export default LinkWithArrow;
