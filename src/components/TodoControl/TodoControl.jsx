import React from 'react';
import {DeleteForever} from '@material-ui/icons';
import {IconButton, Checkbox, Paper, Typography} from '@material-ui/core';
import {useStyle} from './TodoControlStyle';

export default function(props) {
    const classes = useStyle();
    function handleComplete(e, task) {
        e.target.disabled = true;
        props.completeTask(task.id);
        setTimeout(() => props.removeTask(task.id), 100);
    }
    return(
        <div className={classes.todoControl}>
            {props.tasks && props.tasks.map((task) => {
                return (
                    <Paper className={classes.todoControlItem}  key={task.id}>
                        <Checkbox color="primary" onChange={(e) => { handleComplete(e, task); }} />
                        <Typography className={classes.todoControlItemText}>{task.title}</Typography>
                        <IconButton onClick={() => { props.removeTask(task.id); }} >
                            <DeleteForever />
                        </IconButton>
                    </Paper>
                );
            })}
        </div>
    );
}
