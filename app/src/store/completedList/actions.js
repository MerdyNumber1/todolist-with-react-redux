export const GET_TASKS = 'GET_TASKS';

export const getTasks = () => (dispatch) => {
    fetch(`${process.env.REACT_APP_API_URL}/tasks?completed=true`, {method: 'GET'})
        .then(res => res.json())
        .then(data => dispatch({type: GET_TASKS, payload: data}));
};