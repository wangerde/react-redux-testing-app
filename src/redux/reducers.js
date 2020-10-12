import { combineReducers } from 'redux';
import { cakeReducer } from './cake/cakeReducer';
import { iceCreamReducer } from './iceCream/iceCreamReducer';
import { orangeJuiceReducer } from './orangeJuice/orangeJuiceReducer';
import { customerReducer } from './customer/customerReducer';

export const reducers = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    orangeJuice: orangeJuiceReducer,
    customer: customerReducer
})