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
            if(localStorage) {
                localStorage.setItem('tasks', JSON.stringify(state.tasks.filter((item) => item.id !== action.payload)))
            }
            return {
                ...state,
                tasks: state.tasks.filter((item) => item.id !== action.payload),
            };
        case COMPLETE_TASK:
            if(localStorage) {
                let completedTasks = JSON.parse(localStorage.getItem('completed_tasks'));
                let completedTask = JSON.parse(localStorage.getItem('tasks')).filter((task) => task.id === action.payload)[0];

                if(Array.isArray(completedTasks)) {
                    completedTasks.push({id: completedTask.id, title: completedTask.title});
                } else {
                    completedTasks = [completedTask];
                }

                localStorage.setItem('completed_tasks', JSON.stringify(completedTasks));
            }
            return {
                ...state,
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
