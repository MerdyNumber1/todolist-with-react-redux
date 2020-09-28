import React, {useState, useEffect} from 'react';
import {Typography, Paper, Button} from '@material-ui/core';
import {useStyles} from "./CompletedTasksStyle";

export default function (props) {
    const classes = useStyles(); 
    useEffect(props.getTasks, []);

    return (
        <Typography variant='h4'>
            Completed tasks:
            <div className={classes.completedTasks}>
                <Button class={classes.completedButton} onClick={props.getTasks} variant="contained" color="primary">Reload</Button>
                {props.tasks && props.tasks.map((task, index) => {
                    return (
                        <Paper className={classes.completedTask} key={index}>
                            <Typography>{task.title}</Typography>
                        </Paper>
                    );
                })}
                {!props.tasks && <Typography>No completed tasks found</Typography>}
            </div>
        </Typography>
    );
}
