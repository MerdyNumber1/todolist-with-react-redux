import todoReducer from './todoList/reducer';
import {combineReducers} from 'redux';

export default combineReducers({
    todo: todoReducer,
});