export interface UserState {
    users: any[]
    loading: boolean
    error: null | string
}

export enum UserActionTypes { 
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

type FetchUsersAction = {
    type: UserActionTypes.FETCH_USERS
}
type FetchUsersSuccessAction = {
    type: UserActionTypes.FETCH_USERS_SUCCESS
    payload: any[]
}
type FetchUsersErrorAction = {
    type: UserActionTypes.FETCH_USERS_ERROR
    payload: string
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction;