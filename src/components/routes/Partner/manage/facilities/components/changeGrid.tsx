import styled from "styled-components";
import Column from "@theme/assets/column.svg";
import Row from "@theme/assets/row.svg";

import { active, regular } from "@theme/configs/colors";
import { motion } from "framer-motion";
import { FacilityGridType } from "../facilityTypes";

const ChangeGridContainer = styled.div`
align-items: center;
display: flex;
`;

const GridSelector = styled.img`
cursor: pointer;
height: 2rem;
object-fit: contain;
width: 2rem;
`;

const ChangeGrid = ({grid, setGrid}: FacilityGridType) => {

    const handleChange = (gridType: string) => {
        setGrid(gridType);
    }

return(
    <ChangeGridContainer>
        <GridSelector as={motion.img} src={Column.src} onClick={() => handleChange('column')} initial={{filter: regular}} animate={{filter: (grid === "column") ? active : regular}} />
        <GridSelector as={motion.img} src={Row.src} onClick={() => handleChange('row')} initial={{filter: regular}} animate={{filter: (grid === "row") ? active : regular}}/>
    </ChangeGridContainer>
);
}

export default ChangeGrid;