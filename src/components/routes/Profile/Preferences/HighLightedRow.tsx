import styled from 'styled-components';

const HighLightedRow = styled.div`
    background-color: var(--grey);
    border-radius: ${({ theme }) => theme.space['2xs']};
    display: flex;
    justify-content: space-between;
    padding: 14px 20px;
    width: 100%;
`;

export default HighLightedRow;
