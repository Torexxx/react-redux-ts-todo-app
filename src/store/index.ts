import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleWare from 'redux-thunk'


let rootReducer = combineReducers({

})


let store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

export default store;