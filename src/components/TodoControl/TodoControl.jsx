import React from 'react';
import {DeleteForever} from '@material-ui/icons';
import {IconButton, Checkbox, Paper, Typography} from '@material-ui/core';
import {useStyle} from './TodoControlStyle';

export default function(props) {
    const classes = useStyle();
    return(
        <div className={classes.todoControl}>
            {props.tasks && props.tasks.map((task, index) => {
                return (
                    <Paper className={classes.todoControlItem} key={index}>
                        <Checkbox color="primary" />
                        <Typography className={classes.todoControlItemText}>{task}</Typography>
                        <IconButton onClick={() => { props.removeTask(index); }}>
                            <DeleteForever />
                        </IconButton>
                    </Paper>
                );
            })}
        </div>
    );
}
