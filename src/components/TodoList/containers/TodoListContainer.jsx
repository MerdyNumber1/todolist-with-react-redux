import {bindActionCreators} from "redux";
import React from 'react';
import {addTask, removeTask, completeTask} from "store/todoList/actions";
import {connect} from "react-redux";
import {TodoList} from "components";
import {setupTasks} from "../../../store/todoList/actions";

function mapStateToProps(state) {
    return {
        tasks: state.todo.tasks,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addTask: bindActionCreators(addTask, dispatch),
        removeTask: bindActionCreators(removeTask, dispatch),
        completeTask: bindActionCreators(completeTask, dispatch),
        setupTasks: bindActionCreators(setupTasks, dispatch),
    }
}

function TodoListContainer(props) {
    return (<TodoList
        tasks={props.tasks}
        addTask={props.addTask}
        removeTask={props.removeTask}
        completeTask={props.completeTask}
        setupTasks={props.setupTasks}
    />)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
