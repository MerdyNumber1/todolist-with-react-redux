import {bindActionCreators} from "redux";
import React from 'react';
import {getTasks} from "store/completedList/actions";
import {connect} from "react-redux";
import {CompletedTasks} from "components"; 

function mapStateToProps(state) {
    return {
        tasks: state.completed.tasks,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getTasks: bindActionCreators(getTasks, dispatch),
    }
}

function CompletedListContainer(props) {
    return (<CompletedTasks
        tasks={props.tasks}
        getTasks={props.getTasks}
    />);
}

export default connect(mapStateToProps, mapDispatchToProps)(CompletedListContainer);
