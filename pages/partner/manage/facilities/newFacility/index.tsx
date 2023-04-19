import NewFacilityContent from "@components/routes/Partner/manage/facilities/newFacility/newFacilityContent";
import styled from "styled-components";

const NewFacilityContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
`;

const NewFacility = () => (
    <NewFacilityContainer>
        <NewFacilityContent /> 
    </NewFacilityContainer>
    )

export default NewFacility;