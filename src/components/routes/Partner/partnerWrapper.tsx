import ViewTogglerByURL from "@components/molecules/ViewToggler/viewTogglerByURL";
import { mediaQueriesReversed } from "@theme/configs/mediaQueries";
import { useEffect } from "react";
import styled from "styled-components";
import { PartnerView } from "./PartnerTypes";


const PartnerContainer = styled.div`
align-items: center;
display: flex;
flex-direction: column;
padding-top: 2%;
width: 60%;
${mediaQueriesReversed.desktopM}{
    width: 70%;
}
${mediaQueriesReversed.desktop}{
    width: 75%;
}
${mediaQueriesReversed.laptop}{
    width: 80%;
}
${mediaQueriesReversed.laptopS}{
    width: 85%;
}
${mediaQueriesReversed.tabletL}{
    width: 90%;
}
${mediaQueriesReversed.mobileL}{
    width: 95%;
}
`;

const partnerView: PartnerView = {
    overview: '/partner/overview',
    manage: '/partner/manage',
    rent: '/partner/rent'
}

const PartnerWrapper = ({children}: {children: any}) => {

    useEffect(() => {
        const unknownBox = document.getElementById("headersUnknownBox");
        if(unknownBox) unknownBox.style.display = "none";
        return () => {
            if(unknownBox) unknownBox.style.display = "block";
        };
    }, []);

    return(
        <PartnerContainer>
            <ViewTogglerByURL view={partnerView} textVariant='paragraph2' justifyContent="flex-start"/>
            {children}    
        </PartnerContainer>
    );
}

export default PartnerWrapper;