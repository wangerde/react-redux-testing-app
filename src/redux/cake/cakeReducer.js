import { BUY_CAKE } from './cakeTypes';

const initialState = {
    numberOfCakes: 10
}
export const cakeReducer = (state=initialState, action) => {
    switch(action.type) {
        case BUY_CAKE :
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        default: return state
    }
}
