import {bindActionCreators} from "redux";
import React from 'react';
import {addTask, removeTask} from "store/todoList/actions";
import {connect} from "react-redux";
import {TodoList} from "components";

function mapStateToProps(state) {
    return {
        tasks: state.todo.tasks,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addTask: bindActionCreators(addTask, dispatch),
        removeTask: bindActionCreators(removeTask, dispatch),
    }
}

function TodoListContainer(props) {
    return (<TodoList tasks={props.tasks} addTask={props.addTask} removeTask={props.removeTask} />)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
