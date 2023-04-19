import styled from 'styled-components';

const CartRow = styled.div`
    align-items: center;
    display: flex;

    &:not(:last-of-type) {
        margin-bottom: 18px;
    }

    //&:not(:first-of-type) {
    margin-top: 18px;
    //}
`;

export default CartRow;
