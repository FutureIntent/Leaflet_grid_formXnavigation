import { motion, useAnimationControls, useDragControls } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import PullContainer from './PullContainer';
import CustomSwipeableDrawerWrapper from './SwipeableDrawerWrapper';

const DrawerContent = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    touch-action: none;
    width: 100%;
`;

const CustomSwipeableDrawer = ({
    children,
    pullerHeight,
}: {
    children: any;
    pullerHeight: number;
}) => {
    const controls = useDragControls();
    const animation = useAnimationControls();

    const [topY, setBottomY] = useState<number>(0);

    const drawerRef = useRef<any>(null);
    const pullerRef = useRef<any>(null);

    const startDrag = (event: any) => {
        controls.start(event);
        setBottomY(drawerRef.current.getBoundingClientRect().height - pullerHeight);
    };

    const handleDragOver = (_: any, info: any) => {
        const splitPoint =
            window.innerHeight -
            (drawerRef.current.getBoundingClientRect().height - pullerHeight) / 2;

        if (info.point.y >= splitPoint) {
            animation.start({ y: 0 });
            return;
        }
        animation.start({ y: -drawerRef.current.getBoundingClientRect().height + pullerHeight, transition: {type: "spring", bounce: 0} });
    };

    useEffect(() => {
        drawerRef.current.style.top = `${-pullerHeight}px`;
        animation.start({
            y: 0,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.innerWidth, window.innerHeight]);

    return (
        <DrawerContent
            as={motion.div}
            ref={drawerRef}
            drag="y"
            initial={{ y: 0 }}
            dragConstraints={{ bottom: 0, top: -topY }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            onDragEnd={handleDragOver}
            dragControls={controls}
            dragListener={false}
            animate={animation}
        >
            <PullContainer
                pullerRef={pullerRef}
                startDrag={startDrag}
                pullerHeight={pullerHeight}
            />
            <CustomSwipeableDrawerWrapper>{children}</CustomSwipeableDrawerWrapper>
        </DrawerContent>
    );
};

export default CustomSwipeableDrawer;
