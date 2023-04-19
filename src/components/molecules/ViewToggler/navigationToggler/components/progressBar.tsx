import colors from "@theme/configs/colors";
import { motion } from "framer-motion";
import { useMemo } from "react";
import styled from "styled-components";
import { ProgressBarType } from "../../TogglerTypes/TogglerTypes";
import { getCurrentView } from "./navigation";

const ProgressBarContainer = styled.div`
background-color: ${colors.white};
border: none;
height: 0.3rem;
position: relative;
width: 100%;
`;

const Bar = styled.hr`
background-color: ${colors.blueBrand};
border: none;
height: 0.3rem;
left: 0;
margin: 0;
position: absolute;
top: 0;
`;

const countBarWidth = (current: number, last: number): number => 100 / last * current;

const ProgressBar = ({view}: ProgressBarType) => {

    const keys = Object.keys(view);
    const {length} = keys;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const current: number = useMemo(() => getCurrentView(keys, view), [view]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const currentLength: number = useMemo(() => countBarWidth(current, length - 1), [view]);

    return(
        <ProgressBarContainer>
            <Bar as={motion.hr} initial={{width: "0"}} animate={{width: `${currentLength}%`}}/>
        </ProgressBarContainer>
    );
}

export default ProgressBar;