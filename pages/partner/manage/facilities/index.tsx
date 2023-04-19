import FacilitiesContent from "@components/routes/Partner/manage/facilities/facilitiesContent";
import styled from "styled-components";

const ManageContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
`;

const Manage = () => (
    <ManageContainer>
        <FacilitiesContent />
    </ManageContainer>
    )

export default Manage;