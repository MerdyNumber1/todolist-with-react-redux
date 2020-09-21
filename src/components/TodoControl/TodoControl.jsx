import React, {useState} from 'react';
import {DeleteForever} from '@material-ui/icons';
import {IconButton, Checkbox, Paper, Typography} from '@material-ui/core';
import {useStyle} from './TodoControlStyle';

export default function(props) {
    const classes = useStyle();
    const [completing, setCompleting] = useState(false);

    function handleComplete(e, task) {
        props.completeTask(task.id);
        setCompleting(true);
        setTimeout(() => {
            props.removeTask(task.id);
            setCompleting(false);
        }, 150);
    }

    return(
        <div className={classes.todoControl}>
            {props.tasks && props.tasks.map((task, index) => {
                return (
                    <Paper className={classes.todoControlItem}  key={task.id}>
                        <Checkbox disabled={completing} color="primary" onChange={(e) => { handleComplete(e, task); }} />
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
