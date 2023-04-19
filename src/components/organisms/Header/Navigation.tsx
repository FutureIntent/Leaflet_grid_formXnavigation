import { Stack } from '@mui/material';
import { getToken } from '@services/axios/axios';
import routeMap from '@utils/RouteMap';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import styled from 'styled-components';

import Link from '@components/atoms/Link';
import Typography from '@components/atoms/Typography';

const NavLink = styled(Link)<{ isActive?: boolean }>`
    position: relative;

    ${({ isActive }) =>
        isActive &&
        `
        &:after {
            background-color: var(--blue-brand);
            bottom: -5px;
            content: '';
            height: 3px;
            left: 0;
            position: absolute;
            width: 100%;
    }
    `};
`;

const Navigation = (): ReactElement | null => {
    const { pathname } = useRouter();
    const isSignedIn = getToken();

    if (!isSignedIn) return null;

    return (
        <Stack
            direction="row"
            spacing={7}
            justifyContent="center"
            alignItems="center"
            height="100%"
        >
            <NavLink href={routeMap.home} isActive={pathname === routeMap.home}>
                <Typography variant="caption" color="var(--black-brand)" transformText="uppercase">
                    Home
                </Typography>
            </NavLink>
            <NavLink
                href={routeMap.therapies}
                isActive={pathname.indexOf(routeMap.therapies) !== -1}
            >
                <Typography variant="caption" color="var(--black-brand)" transformText="uppercase">
                    THERAPIES
                </Typography>
            </NavLink>
            <NavLink href={routeMap.devices} isActive={pathname.indexOf(routeMap.devices) !== -1}>
                <Typography variant="caption" color="var(--black-brand)" transformText="uppercase">
                    DEVICES
                </Typography>
            </NavLink>
        </Stack>
    );
};

export default Navigation;
