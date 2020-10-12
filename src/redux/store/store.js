import { createStore, applyMiddleware } from 'redux';
import { cakeReducer } from '../cake/cakeReducer';
// import { BUY_CAKE } from '../cake/cakeTypes';
// import buyCake from '../cake/cakeActions';

const store = createStore(cakeReducer);

// store.dispatch(buyCake());

export default store;