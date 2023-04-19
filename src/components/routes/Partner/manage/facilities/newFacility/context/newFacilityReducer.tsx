import { NewFacilityType } from "./contextTypes";

const newFacilityReducer = (state: NewFacilityType, action: any) => {

    switch (action.type) {
        case "handleData":
            return {
                ...state, data: {
                    ...state.data, [action.payload.name as keyof object]: action.payload.value 
                }
            };
            break;
        default:
            return {...state};
    }
    
}

export default newFacilityReducer;

