import NextLink from 'next/link';
import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

export interface LinkProps {
    children: ReactNode | ReactNode[];
    href: string;
    target?: string;
}

const Container = styled.a`
    align-items: center;
    cursor: pointer;
    display: flex;
    text-decoration: none;
`;

const Link = ({ children, href, ...rest }: LinkProps): ReactElement => (
    <NextLink href={href} passHref>
        <Container {...rest}>{children}</Container>
    </NextLink>
);

export default Link;
