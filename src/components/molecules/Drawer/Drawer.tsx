import { Drawer as MuiDrawer } from '@mui/material';
import { styled as styledMui, Theme, CSSObject } from '@mui/material/styles';
import { ReactNode, useState } from 'react';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

const openedMixin = (theme: Theme): CSSObject => ({
    width: '300px',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    width: `60px`,
});

const StyledDrawer = styledMui(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: 100,
        flexShrink: 0,
        backgroundColor: 'white',
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
            '& .MuiDrawer-paper a': {
                visibility: 'hidden',
            },
        }),
    }),
);

const CollapseBtn = styled.div<{ isOpen: boolean }>`
    align-items: center;
    background-color: var(--white);
    border: 1px solid var(--grey);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    height: 30px;
    justify-content: center;
    pointer-events: all;
    position: absolute;
    right: -15px;
    top: calc(var(--header-height) + 15px);
    transform-origin: center;
    transition: transform 0.2s ease-in-out;
    visibility: visible;
    width: 30px;

    ${({ isOpen }) =>
        !isOpen &&
        `
      transform: rotate(180deg);
  `};
`;

const Drawer = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDrawer = (newOpen: boolean) => () => {
        setIsOpen(newOpen);
    };

    return (
        <>
            <StyledDrawer
                anchor="left"
                open={isOpen}
                elevation={0}
                variant="permanent"
                onClose={toggleDrawer(false)}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <Box pt="var(--header-height)">
                    <CollapseBtn isOpen={isOpen} onClick={toggleDrawer(!isOpen)}>
                        <Typography color="var(--grey-dark)">{'<'}</Typography>
                    </CollapseBtn>
                    {children}
                </Box>
            </StyledDrawer>
        </>
    );
};

export default Drawer;
