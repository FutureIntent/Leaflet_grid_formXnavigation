import AgentsContent from "@components/routes/Partner/manage/agents/agentsContent";
import styled from "styled-components";

const AgentsContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
`;

const Agents = () => (
    <AgentsContainer>
        <AgentsContent />
    </AgentsContainer>
    )

export default Agents;