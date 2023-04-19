import SalesContent from "@components/routes/Partner/manage/sales/salesContent";
import styled from "styled-components";

const SalesContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
`;

const Sales = () => (
    <SalesContainer>
        <SalesContent /> 
    </SalesContainer>
    )

export default Sales;