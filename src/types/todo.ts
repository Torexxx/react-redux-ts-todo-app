export interface TodoState {
    todos: TodoType[]
    error: null | string
    loading: boolean
    page: number
    limit: number
}

export enum TodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_PAGE = 'SET_PAGE',
}

export type TodoType = {
    userId: number
    id: number
    title: string
    completed: boolean
}