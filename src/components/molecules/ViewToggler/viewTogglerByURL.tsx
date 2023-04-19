import { FONT_REGULAR } from "@components/atoms/Typography/Typography";
import colors, { active, regular } from "@theme/configs/colors";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { TogglerByURLType } from "./TogglerTypes/TogglerTypes";
import { TogglerContainer, TogglerElement, IconViewWrapper, CustomTypography, TogglerUnderline, Icon } from "./viewToggler";


const ViewTogglerByURL = ({view, icons, justifyContent = "center", textVariant}: TogglerByURLType) => {
    const router = useRouter();
    const viewKeys: string[] = Object.keys(view);

    const compareURL = (key: string) => {
        if(!router.pathname.includes(view[key as keyof object])) return false;
        return true;
    }

    function decideColor(item: string): string{
        if(icons && compareURL(item)) return colors.blueBrand;
        if(icons) return colors.greyDark;
        return colors.blackBrand;
    }

    return(
        <TogglerContainer justifyContent={justifyContent}>
            {viewKeys.map((item, index)=><Link href={view[item as keyof object]} key={`toggle_${item}`}>
                <TogglerElement>
                    <IconViewWrapper>
                        {(icons && icons[index]) && <Icon src={icons[index]} style={{filter: (compareURL(item)) ? active : regular}}/>}           
                        <CustomTypography variant={textVariant} color={{color: decideColor(item)}} fontWeight={FONT_REGULAR}>
                            {item.toUpperCase()}
                        </CustomTypography>
                    </IconViewWrapper>
                    {compareURL(item) && <TogglerUnderline initial={{width: 0}} animate={{width: "100%"}} as={motion.hr} />}
                </TogglerElement>
            </Link>)}
        </TogglerContainer>
    );
}

export default ViewTogglerByURL;