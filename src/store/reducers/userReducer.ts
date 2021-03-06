import {  UserActionTypes, UserState } from "../../types/user";
import {UserAction} from '../action-creators/user'

let initialState: UserState = {
    users: [],
    loading: false,
    error: null
}

const userReducer = (state = initialState, action: UserAction): UserState => {
    switch(action.type) {
        case UserActionTypes.FETCH_USERS:
            return {
                loading: true, error: null, users: []
            }
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {
                loading: false, error: null, users: action.payload
            }  
        case UserActionTypes.FETCH_USERS_ERROR:
            return {
                loading: false, error: action.payload, users: []
            }  
    default: 
        return state
    }
}

export default userReducer;
