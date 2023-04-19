import { motion } from "framer-motion";
import styled from "styled-components";

const RevealContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
`;

const RevealAnimation = ({children}: {children: any}) => (
    <RevealContainer as={motion.div} initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} >
        {children}
    </RevealContainer>
    )

export default RevealAnimation;