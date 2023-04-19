import Typography from "@components/atoms/Typography";
import { FONT_REGULAR } from "@components/atoms/Typography/Typography";
import colors, {active, regular} from "@theme/configs/colors";
import { mediaQueriesReversed } from "@theme/configs/mediaQueries";
import { motion } from "framer-motion";
import styled from "styled-components";
import { TogglerContainerInterface, TogglerType } from "./TogglerTypes/TogglerTypes";


export const TogglerContainer = styled.ul<TogglerContainerInterface>`
column-gap: 3%;
display: grid;
grid-auto-flow: column;
justify-content: ${({justifyContent}) => justifyContent};
overflow-x: auto;
width: 100%;

${mediaQueriesReversed.tabletL}{
    column-gap: 4%;
}

${mediaQueriesReversed.tablet}{
    column-gap: 5%;
}
`;

export const TogglerElement = styled.li`
-ms-user-select: none;
-webkit-user-select: none;
user-select: none;
`;

export const IconViewWrapper = styled.div`
align-items: center;
cursor: pointer;
display: flex;
`;

export const Icon = styled.img`
height: 1.2rem;
margin-right: 0.5rem;
width: 1.2rem;
`;

export const CustomTypography = styled(Typography)`
&:focus, &:active, &:hover {
    background-color: none;
}

${mediaQueriesReversed.tablet}{
    font-size: 12px;
}
`;

export const TogglerUnderline = styled.hr`
background-color: ${colors.blueBrand};
border: none;
height: 0.2rem;
margin: 0;
margin-top: 5%;
width: 100%;
`;

const ViewToggler = ({view, setView, justifyContent="center", icons, textVariant}: TogglerType) => {
    const viewKeys: string[] = Object.keys(view);

    const handleView = (event: any) => {
        const id = event.target.id.split("_")[1];
        const newView: any = {};

        viewKeys.forEach((item: string)=>{
            if(id !== item){
                newView[item as keyof object] = false;
                return;
            }
            newView[item as keyof object] = true;
        });
        setView(newView);
    }

    function decideColor(item: string): string{
        if(icons && view[item as keyof object]) return colors.blueBrand;
        if(icons) return colors.greyDark;
        return colors.blackBrand;
    }

return(
    <TogglerContainer justifyContent={justifyContent}>
        {viewKeys.map((item, index) => 
            <TogglerElement key={`toggle_${item}`}>
                <IconViewWrapper onClick={handleView} id={`toggle_${item}`}>
                    {(icons && icons[index]) && <Icon src={icons[index]} id={`toggle_${item}`} style={{filter: (view[item as keyof object]) ? active : regular}}/>}           
                    <CustomTypography variant={textVariant} id={`toggle_${item}`} color={{color: decideColor(item)}} fontWeight={FONT_REGULAR}>
                        {item.toUpperCase()}
                    </CustomTypography>
                </IconViewWrapper>
                {view[item as keyof object] && <TogglerUnderline initial={{width: 0}} animate={{width: "100%"}} as={motion.hr} />}
            </TogglerElement>)}
    </TogglerContainer>
);
}

export default ViewToggler;