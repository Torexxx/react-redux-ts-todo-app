import { combineReducers} from 'redux';
import { todoReducer } from './todoReducer';
import userReducer from './userReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer,
});

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never;
export type InferActionTypes<T extends {[key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>;

export type RootState = ReturnType<typeof rootReducer>; 