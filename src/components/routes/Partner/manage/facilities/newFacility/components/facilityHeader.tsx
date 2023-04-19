import Typography from "@components/atoms/Typography";
import { getCurrentView } from "@components/molecules/ViewToggler/navigationToggler/components/navigation";
import colors from "@theme/configs/colors";
import { mediaQueriesReversed } from "@theme/configs/mediaQueries";
import { useMemo } from "react";
import styled from "styled-components";
import { FacilityHeaderType } from "../newFacilityTypes";

const HeaderContainer = styled.div`
padding-bottom: 5%;
width: 70%;

${mediaQueriesReversed.desktop}{
    width: 70%;
}

${mediaQueriesReversed.laptop}{
    width: 80%;
}

${mediaQueriesReversed.tabletL}{
    width: 85%;
    padding: 1%;
    padding-bottom: 2.5%;
}

${mediaQueriesReversed.mobileL}{
    width: 90%;
}
`; 

const FacilityHeader = ({view, viewData}: FacilityHeaderType) => {

    const keys = Object.keys(view);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const current: number = useMemo(() => getCurrentView(keys, view), [view]);

    return(
        <HeaderContainer>
            <Typography variant="h2" color={colors.white} hideOverflow={false}>
                {viewData[keys[current] as keyof object].header}
            </Typography>
            <Typography variant="paragraph" color={colors.white} hideOverflow={false}>
                {viewData[keys[current] as keyof object].text}
            </Typography>
        </HeaderContainer>
    );
}

export default FacilityHeader;