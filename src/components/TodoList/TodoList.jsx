import React, {useEffect} from 'react';
import {TodoForm, TodoControl} from "components";

export default function(props) {
    useEffect(() => props.setupTasks(), []);
    return (
        <>
            <TodoForm addTask={props.addTask} />
            <TodoControl tasks={props.tasks} removeTask={props.removeTask} completeTask={props.completeTask} />
        </>
    );
}
