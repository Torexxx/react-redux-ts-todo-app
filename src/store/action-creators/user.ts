import { Dispatch } from "redux";
import { UserActionTypes } from "../../types/user";
import axios from 'axios';
import {UserType} from '../../types/user';
import { ThunkAction } from "redux-thunk";
import { InferActionTypes, RootState } from "../reducers";

export type UserAction = InferActionTypes<typeof actions>;

const actions = {
     fetchUsers : () => ({type: UserActionTypes.FETCH_USERS} as const),
     fetchUsersSuccess : (users: UserType[]) => ({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: users} as const),
     fetchUsersError : (error: string) => ({type: UserActionTypes.FETCH_USERS_ERROR, payload: error} as const),
}

type ThunkType = ThunkAction<Promise<void>, RootState, unknown, UserAction>;

export const getUsers = (): ThunkType => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            
            dispatch(actions.fetchUsers());
            let response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setTimeout(() => {
                dispatch(actions.fetchUsersSuccess(response.data));
            }, 1000)
        }
        catch(err) {
            dispatch(actions.fetchUsersError('Ошибка при загрузке пользователей:  ' + err));
        }
    }
}
