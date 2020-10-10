import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'; 
import axios from 'axios';

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const fetchUserRequest = () => {
    return {
        type: 'FETCH_USERS_REQUEST'
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: 'FETCH_USERS_SUCCESS',
        payload: users
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: 'FETCH_USERS_FAILURE',
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_USERS_REQUEST': 
            return {
                ...state,
                loading: true
            }

        case 'FETCH_USERS_SUCCESS': 
            return {
                loading: false,
                users: action.payload,
                error: ''
            }

        case 'FETCH_USERS_FAILURE': 
            return {
                loading: false,
                users: [],
                error: action.payload
            }

        default: return {
            initialState
        }
    }
}

const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                //response.data
                const users = response.data.map(i=>i.name);
                dispatch(fetchUsersSuccess(users))
                console.log(users);
            })
            .catch(error => {
                //error.message
                const errorMsg = error.message;
                dispatch(fetchUsersFailure(errorMsg))
                console.log(errorMsg)
            })
    }
}

const store = createStore(reducer, applyMiddleware(ReduxThunk));
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())