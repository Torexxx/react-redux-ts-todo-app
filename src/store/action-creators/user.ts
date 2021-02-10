import { Dispatch } from "redux";
import { UserActionTypes } from "../../types/user";
import axios from 'axios';
import {UserType} from '../../types/user';
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";

export type UserAction = ReturnType<typeof fetchUsers> | ReturnType<typeof fetchUsersSuccess> | ReturnType<typeof fetchUsersError>;

const fetchUsers = () => ({type: UserActionTypes.FETCH_USERS} as const);
const fetchUsersSuccess = (users: UserType[]) => ({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: users} as const);
const fetchUsersError = (error: string) => ({type: UserActionTypes.FETCH_USERS_ERROR, payload: error} as const);
type ThunkType = ThunkAction<Promise<void>, RootState, unknown, UserAction>;

export const getUsers = (): ThunkType => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            
            dispatch(fetchUsers());
            let response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setTimeout(() => {
                dispatch(fetchUsersSuccess(response.data));
            }, 1000)
        }
        catch(err) {
            dispatch(fetchUsersError('Ошибка при загрузке пользователей:  ' + err));
        }
    }
}
