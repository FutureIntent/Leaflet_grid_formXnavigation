import Input from "@components/atoms/Form/Input";
import TextArea from "@components/atoms/Form/TextArea";
import { mediaQueriesReversed } from "@theme/configs/mediaQueries";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ClearIcon from '@mui/icons-material/Clear';
import colors from "@theme/configs/colors";
import { NewFacilityDataType } from "../context/contextTypes";
import { NewFacilityContext } from "../context/newFacilityContext";

const MainDataContainer = styled.div`
align-items: center;
display: flex;
flex-direction: column;
width: 100%;
`;

const DataForm = styled.form`
align-items: flex-start;
display: flex;
flex-direction: column;
width: 60%;

${mediaQueriesReversed.laptop}{
    width: 70%;
}

${mediaQueriesReversed.tabletL}{
    width: 80%;
}

${mediaQueriesReversed.mobileL}{
    width: 90%;
}
`;

const Data = () => {
    const [state, dispatch] = useContext(NewFacilityContext);

    const handleInput = (event: any) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        dispatch({
            type: "handleData",
            payload: {name: inputName, value: inputValue}
        })

    }

    const handleClear = (inputName: string) => {
        dispatch({
            type: "handleData",
            payload: {name: inputName, value: ""}
        })
    }

    useEffect(()=>{
        console.log(state);
    },[state])

    return(
        <MainDataContainer>
            <DataForm>
                <Input name="name" type="text" value={state.data.name} onChange={handleInput} label="Facility name" width="100%" clearIcon={{icon: <ClearIcon sx={{color: colors.greyDark}}/>, handleClear}}/>
                <Input name="type" type="text" value={state.data.type} onChange={handleInput} label="Type" width="100%" clearIcon={{icon: <ClearIcon sx={{color: colors.greyDark}}/>, handleClear}}/>
                <TextArea name="comment" value={state.data.comment} onChange={handleInput} label="Comment" width="100%" />
            </DataForm>
        </MainDataContainer>
    );
}

export default Data;