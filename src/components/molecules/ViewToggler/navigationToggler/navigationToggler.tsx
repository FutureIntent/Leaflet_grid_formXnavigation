import { useEffect } from "react";
import styled from "styled-components";
import { NavigationTogglerType } from "../TogglerTypes/TogglerTypes";
import Navigation from "./components/navigation";
import ProgressBar from "./components/progressBar";

const NavigationTogglerContainer = styled.div`
align-items: center;
border: none;
display: flex;
flex-direction: column;
height: 100%;
justify-content: space-between;
padding-bottom: 0.5rem;
width: 100%;
`;

const NavigationToggler = ({view, setView, progress = true}: NavigationTogglerType) => {

    useEffect(()=>{
        console.log(view);
    })

    return(
        <NavigationTogglerContainer>
            {progress && <ProgressBar view={view}/>}
            <Navigation view={view} setView={setView}/>
        </NavigationTogglerContainer>
    );
}

export default NavigationToggler;