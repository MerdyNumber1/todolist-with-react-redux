import todoReducer from './todoList/reducer';
import completedReducer from './completedList/reducer';
import {combineReducers} from 'redux';

export default combineReducers({
    todo: todoReducer,
    completed: completedReducer,
});