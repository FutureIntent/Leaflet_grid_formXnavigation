import { CardSize } from "@components/atoms/Card/Card";
import TherapyCard from "@components/molecules/TherapyCard";
import { mediaQueriesReversed } from "@theme/configs/mediaQueries";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import facilityDummyList from "./dummyData/facilitiesDummyData";
import SearchFacilityInput from "./components/searchFacility";
import AddFacility from "./components/addFacility";
import ChangeGrid from "./components/changeGrid";
import { FacilityInterface } from "./facilityTypes";
import ManageWrapper from "../manageWrapper";
import RevealAnimation from "../../animations/reveal";

const FacilitiesContainer = styled.div`
align-items: center;
display: flex;
flex-direction: column;
margin-bottom: 10%;
width: 100%;
`;

const FacilitiesHeader = styled.div`
display: flex;
justify-content: space-between;
overflow: auto;
padding: 4px 0;
width: 100%;

${mediaQueriesReversed.mobileL}{
    align-items: center;
    flex-direction: column;
    justify-content: unset;
}
`;

const FacilityInputWrapper = styled.div`
align-items: center;
display: flex;
min-width: 230px;
width: 45%;

${mediaQueriesReversed.mobileL}{
    width: 90%;
}
`;

const GridFacilityWrapper = styled.div`
align-items: center;
display: flex;
justify-content: flex-end;
max-width: 45%;
min-width: 230px;

${mediaQueriesReversed.mobileL}{
    justify-content: space-between;
    margin-top: 3%;
    max-width: unset;
    width: 100%;
}
`;

const AddFacilityWrapper = styled.div`
align-items: center;
display: flex;
height: 3rem;
margin-left: 7%;

${mediaQueriesReversed.mobileL}{
    height: 2.5rem;
}
`;

const FacilitiesWrapper = styled.div`
display: grid;
gap: 2rem;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: auto;
margin-top: 2%;
width: 100%;

${mediaQueriesReversed.tabletL}{
    gap: 1.5rem;
    grid-template-columns: 1fr 1fr;
}
${mediaQueriesReversed.mobileL}{
    gap: 1rem;
    grid-template-columns: 1fr;
}
`;

const FacilitiesContent = () => {
    const [facilities, setFacilities] = useState<FacilityInterface[]>([]);
    const [grid, setGrid] = useState<string>("column");
    const router = useRouter();

    const handleSearch = (value: string) => {
        console.log(`Fetch: ${value}`);
        const fetchedFacilities = facilityDummyList;
        setFacilities(fetchedFacilities);
    }

    const handleNewFacilityButton = () => {
        router.push('/partner/manage/facilities/newFacility');
    }

    useEffect(()=>{
        setFacilities(facilityDummyList);
    },[]);

    return(
        <ManageWrapper>
            <RevealAnimation>
                <FacilitiesContainer>
                    <FacilitiesHeader>
                        <FacilityInputWrapper>
                            <SearchFacilityInput handleAction = {handleSearch} placeHolder="Select Facility" name="searchInput"/>             
                        </FacilityInputWrapper>  
                        <GridFacilityWrapper>
                            <ChangeGrid grid={grid} setGrid={setGrid} />
                            <AddFacilityWrapper>
                                <AddFacility text="Add Facility" action={handleNewFacilityButton}/>
                            </AddFacilityWrapper>
                        </GridFacilityWrapper>                       
                    </FacilitiesHeader>
                    <FacilitiesWrapper>
                        {facilities.map((facility: FacilityInterface)=><TherapyCard key={nanoid()} size={CardSize.auto} img={facility.img} heading={facility.heading} address={facility.address} place={facility.place} devices={facility.devices} agents={facility.agents} />)}
                    </FacilitiesWrapper>
                </FacilitiesContainer>
            </RevealAnimation>
        </ManageWrapper>
    );
}

export default FacilitiesContent;