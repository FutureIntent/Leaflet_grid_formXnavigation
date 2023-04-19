import styled from "styled-components";
import Typography from "@components/atoms/Typography";
import { FacilityButton } from "@components/routes/Partner/manage/facilities/components/addFacility";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { useMemo } from "react";
import colors from "@theme/configs/colors";
import {  styled as muistyled } from '@mui/material/styles';
import { ButtonProps } from "@mui/material";
import { NavigationType, TogglerDataType } from "../../TogglerTypes/TogglerTypes";

const NavigationContainer = styled.div`
display: flex;
height: 3rem;
justify-content: space-around;
width: 100%;
`;

const CustomFacilityButton: any = muistyled(FacilityButton)<ButtonProps>((props: any)=>({
    visibility: (props.current > 0) ? "visible" : "hidden", 
    color: colors.greyDark, 
    backgroundColor: "transparent", 
    boxShadow: "none", 
    "@media all and (hover: none)": {
        "&:hover": {
            backgroundColor: "transparent"
        }
    }
}));

export const getCurrentView = (keys: string[], view: object) => {
    let current = -1;
    keys.forEach((key) => {
        if(view[key as keyof object]) current = keys.indexOf(key);
    });
    return current;
}

const Navigation = ({view, setView}: NavigationType) => {

    const keys = Object.keys(view);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const current: number = useMemo(() => getCurrentView(keys,view), [view]);
    
    const handleForward = () => {
        if(current < keys.length - 1){
            setView((prevState: TogglerDataType): TogglerDataType => {
                prevState[keys[current] as keyof object] = false;
                prevState[keys[current + 1] as keyof object] = true;        
                return {...prevState};
            });
        }
    }

    const handleBackward = () => {
        if(current > 0){
            setView((prevState: TogglerDataType): TogglerDataType => {
                prevState[keys[current] as keyof object] = false;
                prevState[keys[current - 1] as keyof object] = true;
                return {...prevState};
            });
        }
    }

    return(
        <NavigationContainer>
            <CustomFacilityButton variant="text" startIcon={<WestIcon />} current={current} onClick={handleBackward}>
                <Typography variant="accent">
                    {(current > 0) && keys[current - 1]}
                </Typography>
            </CustomFacilityButton>
            <FacilityButton variant="contained" endIcon={<EastIcon />} onClick={handleForward}>
                <Typography variant="accent">
                    {(current < keys.length - 1) ? keys[current + 1] : "Finish"}
                </Typography>
            </FacilityButton>
        </NavigationContainer>
    );
}

export default Navigation;