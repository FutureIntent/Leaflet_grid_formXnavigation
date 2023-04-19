import { createContext, useReducer } from "react";
import { NewFacilityType } from "./contextTypes";
import newFacilityReducer from "./newFacilityReducer";

const initialState: NewFacilityType = {
    data: {
        name: "",
        type: "",
        comment: ""
    },
    location: null,
    schedule: null,
    gallery: null,
    devices: null
}

export const NewFacilityContext = createContext<any>(initialState);

const NewFacilityContextProvider = ({children}: {children: any}) => {
    
    const [state, dispatch] = useReducer(newFacilityReducer, initialState);

    return(
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <NewFacilityContext.Provider value = {[state, dispatch]}>
            {children}
        </NewFacilityContext.Provider>
    );
}

export default NewFacilityContextProvider;