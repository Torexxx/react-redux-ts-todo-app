import axios from "axios";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { TodoActionTypes } from "../../types/todo";
import {TodoType} from '../../types/todo'
import { RootState } from "../reducers";

export type TodoAction  = ReturnType<typeof fetchTodos> | ReturnType<typeof fetchTodosSuccess> | ReturnType<typeof fetchTodosError> | ReturnType<typeof setTodoPage>;

const fetchTodos = () => ({type: TodoActionTypes.FETCH_TODOS} as const);
const fetchTodosSuccess = (todos: TodoType[]) => ({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: todos} as const);
const fetchTodosError = (error: string) => ({type: TodoActionTypes.FETCH_TODOS_ERROR, payload: error} as const);

type ThunkType = ThunkAction<Promise<void>, RootState, unknown, TodoAction>;

export const setTodoPage = (page: number) => ({type: TodoActionTypes.SET_PAGE, payload: page} as const);
export const getTodos = (page = 1, limit = 10): ThunkType => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch(fetchTodos());
            let response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {
                    _page: page,
                    _limit: limit
                }
            });
            setTimeout(() => {
                dispatch(fetchTodosSuccess(response.data));
            }, 1000)
        }
        catch(err) {
            dispatch(fetchTodosError('Ошибка при загрузке списка дел:  ' + err));
        }
    }
}

