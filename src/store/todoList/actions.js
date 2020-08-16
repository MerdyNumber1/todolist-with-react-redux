export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task,
    }
};

export const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
        payload: id,
    }
};
