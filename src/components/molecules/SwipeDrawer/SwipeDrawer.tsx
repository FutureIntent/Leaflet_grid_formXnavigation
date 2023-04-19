import { SwipeableDrawer } from '@mui/material';
import { ReactNode, useState } from 'react';
import styled from 'styled-components';

import Box from '@components/atoms/Box';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';

const drawerBleeding = 56;

const Puller = styled.div`
    background-color: var(--grey-dark);
    border-radius: 20px;
    height: 5px;
    position: absolute;
    top: 12px;
    width: 25%;
`;

const StyledBox = styled(Box)`
    background-color: var(--white);
    border-radius: 20px 20px 0 0;
    box-shadow: ${({ theme }) => theme.shadows.card};
    height: ${drawerBleeding}px;
    pointer-events: all;
    visibility: visible;

    @media (pointer: coarse) {
        pointer-events: none;
    }
`;

const StyledDrawer = styled(SwipeableDrawer)`
    .MuiPaper-root {
        background-color: transparent;
        box-shadow: unset;
        flex-direction: row;
    }
`;

const SwipeDrawer = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState(true);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <StyledDrawer
            open={open}
            anchor="bottom"
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            swipeAreaWidth={drawerBleeding}
            disableSwipeToOpen={false}
            ModalProps={{
                keepMounted: true,
            }}
        >
            <GridParent noGutter>
                <GridChild gridColumn={{ _: 'span 12', tablet: '3/ span 8' }}>
                    <Box position="relative">
                        <StyledBox
                            onClick={toggleDrawer(!open)}
                            display="flex"
                            position="absolute"
                            top={-drawerBleeding}
                            justifyContent="center"
                            right={0}
                            left={0}
                        >
                            <Puller />
                        </StyledBox>
                        {children}
                    </Box>
                </GridChild>
            </GridParent>
        </StyledDrawer>
    );
};

export default SwipeDrawer;
