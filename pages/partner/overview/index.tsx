import OverviewContent from "@components/routes/Partner/overview/overviewContent";
import styled from "styled-components";

const OverviewContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
`;

const Overview = () => (
    <OverviewContainer>
        <OverviewContent />
    </OverviewContainer>
    )

export default Overview;