export interface UserState {
    users: UserType[]
    loading: boolean
    error: null | string
}

export enum UserActionTypes { 
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

export type UserType = {
    id: number
    name: string
    username: string
    email: string
    address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
        lat: string
        lng: string
    }
},
phone: string
website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}