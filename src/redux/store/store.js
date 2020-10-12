import { createStore, applyMiddleware } from 'redux';
import { reducers } from '../reducers';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { fetchUsers } from '../customer/customerReducer';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(logger, ReduxThunk)));
store.subscribe(()=>{
    store.getState()
})
store.dispatch(fetchUsers())

export default store;