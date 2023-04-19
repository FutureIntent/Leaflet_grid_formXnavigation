import RentContent from "@components/routes/Partner/rent/rentContent";
import styled from "styled-components";

const RentContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
`;

const Rent = () => (
    <RentContainer>
        <RentContent />         
    </RentContainer>
    )

export default Rent;