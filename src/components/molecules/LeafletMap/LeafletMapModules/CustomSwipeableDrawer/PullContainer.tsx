import colors from "@theme/configs/colors";
import { useEffect } from "react";
import styled from "styled-components";

const PullContainerJSX = styled.div`    
align-items: center;
background-color: ${colors.white};
border-radius: 20px 20px 0 0;
display: flex;
justify-content: center;
visibility: visible;
width: 100%;
`;

const PullContainerLine = styled.hr`
background-color: ${colors.greyDark};
border-color: ${colors.greyDark};
border-radius: 20px;
border-style: solid;
height: 0.4em;
width: 33%;
`;

const PullContainer = ({pullerRef, startDrag, pullerHeight}: {pullerRef: any, startDrag: any, pullerHeight: number}) => {

    useEffect(()=>{
        pullerRef.current.style.height = `${pullerHeight}px`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <PullContainerJSX ref={pullerRef} onPointerDown={startDrag}>
            <PullContainerLine />
        </PullContainerJSX>
    );
}

export default PullContainer;