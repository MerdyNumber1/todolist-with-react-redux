const initState = {
    tasks: localStorage ? JSON.parse(localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')) : [] : [],
};
export default initState;
