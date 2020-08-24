import {ADD_TASK, REMOVE_TASK, COMPLETE_TASK} from "./actions";
import initState from "./initState";

export default (state = initState, action) => {
    switch(action.type) {
        case ADD_TASK:
            let newTask = {id: Date.now(), title: action.payload};
            if(localStorage) {
                localStorage.setItem('tasks', JSON.stringify([...state.tasks, newTask]))
            }
            return {
                ...state,
                tasks: [...state.tasks, newTask],
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
        default:
            return state;
    }
};
