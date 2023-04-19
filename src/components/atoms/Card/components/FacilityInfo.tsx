import Typography from "@components/atoms/Typography";
import { Icon } from "@components/molecules/ViewToggler/viewToggler";
import styled from "styled-components";
import Cubes from "@theme/assets/cubes.svg";
import Person from "@theme/assets/person.svg";
import colors, { regular } from "@theme/configs/colors";
import { FONT_HEAVY } from "@components/atoms/Typography/Typography";
import { mediaQueriesReversed } from "@theme/configs/mediaQueries";

const FacilityInfoContainer = styled.div`
align-items: center;
display: flex;
margin-top: 5%;
width: 100%;

${mediaQueriesReversed.tablet}{
    margin-top: 3%;
}
`;

const DevicesWrapper = styled.div`
align-items: center;
display: flex;
max-width: 45%;
`;

const AgentsWrapper = styled(DevicesWrapper)`
margin-left: 10%;
max-width: 45%;
`;

const CustomIcon = styled(Icon)`
filter: ${regular};
margin-right: 0.1rem;
`;

const CustomTypography = styled(Typography)`
color: ${colors.blueBrand};
font-weight: ${FONT_HEAVY};
white-space: "nowrap";
`;

interface FacilityInfoInterface {
    devices?: number,
    agents?: number
}

const FacilityInfo = ({devices, agents}: FacilityInfoInterface) => (
    <FacilityInfoContainer>
        <DevicesWrapper>
            <CustomIcon src={Cubes.src}/>
            <CustomTypography>{devices}</CustomTypography>
        </DevicesWrapper>
        <AgentsWrapper>
            <CustomIcon src={Person.src}/>
            <CustomTypography>{agents}</CustomTypography>
        </AgentsWrapper>
    </FacilityInfoContainer>
    )

export default FacilityInfo;