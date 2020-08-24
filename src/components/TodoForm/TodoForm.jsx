import React from 'react';
import {Typography, TextField, Button} from "@material-ui/core";
import {useStyle} from './TodoFormStyle';

export default function(props) {
    const classes = useStyle();
    function handleAddTask(e) {
        e.preventDefault();
        let taskValue = e.target.task.value;
        if(taskValue) {
            props.addTask(taskValue);
        }
    }
    return(
        <>
            <Typography variant='h3'>Add Task: </Typography>
            <form className={classes.todoForm} noValidate autoComplete='off' onSubmit={handleAddTask}>
                <TextField className={classes.todoFormInput} id='newTask' label='Add Task' variant='outlined' name='task' />
                <Button type='submit' className={classes.todoFormBtn} variant="contained" color='primary'>Add Task</Button>
            </form>
        </>
    );
}
