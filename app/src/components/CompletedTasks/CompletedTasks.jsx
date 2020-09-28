import React, {useState, useEffect} from 'react';
import {Typography, Paper} from '@material-ui/core';
import {useStyles} from "./CompletedTasksStyle";

export default function (props) {
    const classes = useStyles();
    const [completedTasks, setCompletedTasks] = useState([]);
    useEffect(() => {

    }, []);

    return (
        <Typography variant='h4'>
            Completed tasks:
            <div className={classes.completedTasks}>
                {completedTasks && completedTasks.map((task, index) => {
                    return (
                        <Paper className={classes.completedTask} key={index}>
                            <Typography>{task.title}</Typography>
                        </Paper>
                    );
                })}
                {!completedTasks && <Typography>No completed tasks found</Typography>}
            </div>
        </Typography>
    );
}