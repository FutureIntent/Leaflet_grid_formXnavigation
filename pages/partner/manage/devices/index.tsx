import DevicesContent from "@components/routes/Partner/manage/devices/devicesContent";
import styled from "styled-components";

const DevicesContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
`;

const Devices = () => (
    <DevicesContainer>
        <DevicesContent />
    </DevicesContainer>
    )

export default Devices;