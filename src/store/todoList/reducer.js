import {ADD_TASK, REMOVE_TASK} from "./actions";
import initState from "./initState";

export default (state = initState, action) => {
    switch(action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((item, index) => index !== action.payload),
            };
        default:
            return state;
    }
};