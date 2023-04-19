import Typography from "@components/atoms/Typography";
import { Button, ButtonProps, styled } from "@mui/material";
import colors from "@theme/configs/colors";
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import { FONT_BOLD } from "@components/atoms/Typography/Typography";
import { NewFacilityButton } from "../facilityTypes";

export const FacilityButton = styled(Button)<ButtonProps>(()=>({
    backgroundColor: colors.blueBrand,
    borderRadius: "4px",
    boxShadow: "0px 4px 12px rgba(23, 121, 255, 0.4)",
    height: "100%",
    whiteSpace: "nowrap",
    "@media all and (hover: none)": {
        "&:hover":{
            backgroundColor: colors.blueBrand
        }
    }
}))

const AddFacility = ({text, action}: NewFacilityButton) => (
    <FacilityButton variant="contained" endIcon={<DomainAddIcon/>} onClick={action}>
        <Typography variant="paragraph" fontWeight={FONT_BOLD} transformText='capitalize'>
            {text}
        </Typography>  
    </FacilityButton>
) 

export default AddFacility;