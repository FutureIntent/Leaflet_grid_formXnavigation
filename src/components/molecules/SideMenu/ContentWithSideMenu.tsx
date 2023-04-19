import { Drawer, Stack } from '@mui/material';
import { ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Typography from '@components/atoms/Typography';

const Content = styled.div<{ isOpen: boolean; drawerWidth: number }>`
    margin-left: ${({ drawerWidth, isOpen }) => (isOpen ? `${drawerWidth}px` : 0)};
    padding: 15px;
    position: relative;
    transition: margin-left 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;

    ${mediaQueries.laptopS} {
        padding: 60px;
    }
`;

const StyledDrawer = styled(Drawer)<{ open: boolean }>`
    .MuiPaper-root {
        //overflow: visible;
        height: calc(100vh - var(--header-height) - var(--footer-height));
        padding: 65px 45px;
        top: var(--header-height);
        z-index: ${({ theme }) => theme.zIndices.footer};
    }
`;

const CollapseBtn = styled.div`
    align-items: center;
    background-color: var(--white);
    border: 1px solid var(--grey);
    border-radius: 50%;
    display: flex;
    height: 30px;
    justify-content: center;
    position: absolute;
    right: -15px;
    top: 15px;
    width: 30px;
`;

const ContentWithSideMenu = ({ items, children }: { items: string[]; children: ReactNode }) => {
    const drawerRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(true);
    const [width, setWidth] = useState<number>(0);

    const handleCollapseClick = () => {
        setIsOpen((prevState) => !prevState);
    };

    useEffect(() => {
        setWidth(drawerRef.current?.children[0].clientWidth || 0);
    }, [drawerRef]);

    return (
        <>
            <StyledDrawer variant="persistent" open={isOpen} ref={drawerRef}>
                <CollapseBtn onClick={handleCollapseClick}>
                    <Typography color="var(--grey-dark)">{'<'}</Typography>
                </CollapseBtn>
                <Stack spacing={3}>
                    {items.map((item) => (
                        <Typography key={item} variant="caption" color="var(--black-brand)">
                            {item}
                        </Typography>
                    ))}
                </Stack>
            </StyledDrawer>
            <Content isOpen={isOpen} drawerWidth={width}>
                {children}
            </Content>
        </>
    );
};

export default ContentWithSideMenu;
