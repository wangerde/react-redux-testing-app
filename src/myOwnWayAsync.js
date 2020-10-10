import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk'; 
import axios from 'axios';

const initialState = {
    loading: true,
    users: [],
    error: ''
}

const sendRequest = () => {
    return {
        type: 'SEND_REQUEST',
        payload: 'waiting for the response'
    }
}

const requestSuccess = (users) => {
    return {
        type: 'REQUEST_SUCCESS',
        payload: users
    }
}

const requestFailure = (error) => {
    return {
        type: 'REQUEST_FAILURE',
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SEND_REQUEST':
            return {
                ...state,
                loading: true
            }

        case 'REQUEST_SUCCESS':
            return {
                loading: false,
                users: action.payload,
                error: ''
            }

        case 'REQUEST_FAILURE':
            return {
                loading: false,
                users: [],
                error: action.payload
            }
    
    }
}


const fetchUsers = () => {
    return function(dispatch){
        dispatch(sendRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(request => {
            const users = request.data.map(i=>i.name);
            dispatch(requestSuccess(users))
            console.log(users);
        }).catch(error => {
            const errorMsg = error.message;
            dispatch(requestFailure(errorMsg));
            console.log(errorMsg);
        })
    }
}

const store = createStore(reducer, applyMiddleware(ReduxThunk));
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers());