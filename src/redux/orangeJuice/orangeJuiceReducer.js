import { BUY_ORANGEJUICE } from './orangeJuiceType';

const initialState = {
    orangeJuiceNumber: 30
}

export const orangeJuiceReducer = (state=initialState, action) => {
    switch(action.type) {
        case BUY_ORANGEJUICE:
            return {
                ...state,
                orangeJuiceNumber: state.orangeJuiceNumber - 1
            }

        default: return state;
    }
}
