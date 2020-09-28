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

export const removeTask = (task) => (dispatch) => {
    fetch(`${process.env.REACT_APP_API_URL}/tasks/${task.title}`, {
        method: 'DELETE',
    });

    dispatch({
        type: REMOVE_TASK,
        payload: task.id,
    });
};

export const completeTask = (task) => (dispatch) => {
    fetch(`${process.env.REACT_APP_API_URL}/tasks/${task.title}`, {
        method: 'PUT',
        body: JSON.stringify({isDone: 1}),
        headers: {
            'Content-type': 'application/json'
        }
    });

    dispatch({
        type: COMPLETE_TASK,
        payload: task.id,
    });
};

export const setupTasks = () => (dispatch) => {
    fetch(`${process.env.REACT_APP_API_URL}/tasks`, {method: 'GET'})
        .then(res => res.json())
        .then(data => dispatch({type: SETUP_TASKS, payload: data}));
};