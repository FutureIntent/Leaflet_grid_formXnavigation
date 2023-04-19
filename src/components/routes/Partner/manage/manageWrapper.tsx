import Typography from "@components/atoms/Typography";
import styled from "styled-components";
import Building from "@theme/assets/building.svg";
import Cubes from "@theme/assets/cubes.svg";
import Person from "@theme/assets/person.svg";
import Bag from "@theme/assets/bag.svg";
import ViewTogglerByURL from "@components/molecules/ViewToggler/viewTogglerByURL";
import { ManageView } from "./ManageTypes";
import PartnerWrapper from "../partnerWrapper";
import { TogglerByURLDataType } from "@components/molecules/ViewToggler/TogglerTypes/TogglerTypes";

const ManageContainer = styled.div`
align-items: center;
display: flex;
flex-direction: column;
width: 100%;
`;

const ManageWrapperJSX = styled.div`
display: flex;
flex-direction: column;
margin-top: 2%;
width: 100%;
`;

const CustomTypography = styled(Typography)`
margin-bottom: 2%;
`;

const ContentContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 2%;
width: 100%;
`;

const manageView: TogglerByURLDataType = {
    facilities: '/partner/manage/facilities',
    devices: '/partner/manage/devices',
    agents: '/partner/manage/agents',
    sales: '/partner/manage/sales'
}

const manageIcons: string[] = [Building.src, Cubes.src, Person.src, Bag.src];

const ManageWrapper = ({children}: {children: JSX.Element}) => (
    <PartnerWrapper>
        <ManageContainer>
            <ManageWrapperJSX>
                <CustomTypography variant="h2">
                    MANAGE
                </CustomTypography>
                <ViewTogglerByURL view={manageView} justifyContent="flex-start" icons={manageIcons} textVariant='accent'/>
                <ContentContainer>
                    {children}
                </ContentContainer>
            </ManageWrapperJSX>
        </ManageContainer>
    </PartnerWrapper>
)

export default ManageWrapper;