import firebase from "firebase";

function getInitialTasks() {
    let tasks = [];
    firebase.database().ref('todos').on("value", function(snapshot) {
        for(let key in snapshot.val()) {
            tasks.push({
                title: snapshot.val()[key].title,
                date: snapshot.val()[key].date,
                done: snapshot.val()[key].done
            });
        }
        firebase.database.ref('todos').off('value');
        return tasks;
    });
    return tasks;
}


const initState = {
    tasks: [],
};
export default initState;
