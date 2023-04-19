import styled from 'styled-components';

const SwipeableDrawerWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

const CustomSwipeableDrawerWrapper = ({ children }: { children: any }) => (
    <SwipeableDrawerWrapper>{children}</SwipeableDrawerWrapper>
);

export default CustomSwipeableDrawerWrapper;
