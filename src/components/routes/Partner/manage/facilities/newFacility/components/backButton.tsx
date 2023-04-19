import { IconButton, SvgIconProps } from "@mui/material";
import styled from "styled-components";
import { styled as muistyled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import colors from "@theme/configs/colors";
import Link from "next/link";
import { mediaQueriesReversed } from "@theme/configs/mediaQueries";
import { FacilityBackButtonType } from "../newFacilityTypes";

const BackButtonContainer = styled.div`
align-items: center;
display: flex;
justify-content: flex-start;
padding: 1%;
width: 100%;

${mediaQueriesReversed.tabletL}{
    width: unset;
}
`;

const CustomArrowBackIcon = muistyled(ArrowBackIcon)<SvgIconProps>(()=>({
    color: colors.greyDark,
    height: "3rem",
    width: "3rem",
    cursor: "pointer",
    margin: "0",
    padding: "0",
    "@media all and (max-width: 768px)": {
        width: "2.5rem",
        height: "2.5rem"
    }
}));

const BackButton = ({link}: FacilityBackButtonType) => {
    const zzz="zzz";
    
    return(
        <BackButtonContainer>
            <Link href={link}>
                <IconButton sx={{padding: "0"}}>
                    <CustomArrowBackIcon />
                </IconButton>
            </Link>
        </BackButtonContainer>
    );
}

export default BackButton;