import {ADD_TASK, REMOVE_TASK, COMPLETE_TASK, SETUP_TASKS} from "./actions";
import initState from "./initState";
import {getObjectSize} from "../../utils/getObjectSize";

export default (state = initState, action) => {
    switch(action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, {title: action.payload.title, id: Date.now()}],
            };

        case REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((item) => item.id !== action.payload),
            };

        case COMPLETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((item) => item.id !== action.payload),
            };

        case SETUP_TASKS:
            const lastTaskId = getObjectSize(state.tasks) ? state.tasks[getObjectSize(state.tasks) - 1].id : 0;
            let tasks = action.payload.map((task, index) => {
                return {
                    id: lastTaskId + index,
                    ...task,
                };
            });
            return {
                ...state,
                tasks,
            };

        default:
            return state;
    }
};
