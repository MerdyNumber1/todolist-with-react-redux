import React from 'react';
import {TodoForm, TodoControl} from "components";

export default function(props) {
    return (
        <>
            <TodoForm addTask={props.addTask} />
            <TodoControl tasks={props.tasks} removeTask={props.removeTask} />
        </>
    );
}
