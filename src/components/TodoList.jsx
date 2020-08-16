import React from 'react';
import TodoListInput from "./TodoListInput";
import TodoListUl from "./TodoListUl";

export default class TodoList extends React.Component {
    updateTasks = (task) => {
        this.props.addTask({title: task});
    };
    deleteTask = (taskIndex) => {
        this.props.removeTask(taskIndex);
    };
    render() {
        return (
            <>
                <h1>Список дел:</h1>
                <TodoListInput addTask={this.updateTasks}/>
                <TodoListUl tasks={this.props.tasks} deleteTask={this.deleteTask}/>
            </>
        );
    }
}