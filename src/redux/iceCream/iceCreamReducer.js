import { BUY_ICECREAM } from "./iceCreamType";

const initialState = {
    iceCreamNumber: 20
}

export const iceCreamReducer = (state=initialState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: 
            return {
                ...state,
                iceCreamNumber: state.iceCreamNumber - 1
            }
        default: return state;
    }
}