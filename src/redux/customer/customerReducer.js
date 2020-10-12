import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './customerType';
import store from '../store/store';
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from './customerAction';
import axios from 'axios';

const initialState = {
    loading: false,
    user: [],
    error: ''
};


export const customerReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                error: ''
            }

        case FETCH_USER_FAILURE:
            return {
                loading: false,
                user: [],
                error: action.payload
            }

        default: return state;
    }
}

export const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
                .then(res=> {
                    const users = res.data.map(i=>i.name);
                    dispatch(fetchUserSuccess(users));
                    console.log(users);
                    console.log(store.getState());
                    
                    
                })
                .catch(error=>{
                    console.log(error.message);
                    dispatch(fetchUserFailure(error.message));
                })
    }
}
