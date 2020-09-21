export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const SETUP_TASKS = 'SETUP_TASKS';

export const addTask = (task) => (dispatch) => {
    fetch(`${process.env.REACT_APP_API_URL}/tasks`, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-type': 'application/json'
        }
    });

    dispatch({
        type: ADD_TASK,
        payload: task,
    });
};

export const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
        payload: id,
    }
};

export const completeTask = (id) => {
    return {
        type: COMPLETE_TASK,
        payload: id,
    }
};

export const setupTasks = () => (dispatch) => {
    fetch(`${process.env.REACT_APP_API_URL}/tasks`, {method: 'GET'})
        .then(res => res.json())
        .then(data => dispatch({type: SETUP_TASKS, payload: data}));
};