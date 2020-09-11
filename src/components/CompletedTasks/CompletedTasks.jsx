import React, {useState, useEffect} from 'react';
import {Typography, Paper} from '@material-ui/core';
import {useStyles} from "./CompletedTasksStyle";
import firebase from 'firebase';

export default function (props) {
    const classes = useStyles();
    const [completedTasks, setCompletedTasks] = useState([]);
    useEffect(() => {
        function checkCompletedTasks(snapshot) {
            let tasks = [];
            for(let key in snapshot.val()) {
                tasks.push({
                    title: snapshot.val()[key].title,
                    date: snapshot.val()[key].date,
                    done: snapshot.val()[key].done
                });
            }

            setCompletedTasks([...completedTasks, ...tasks]);
        }

        firebase.database().ref('todos').on("value", function(snapshot) {
            checkCompletedTasks(snapshot);
        });

        return () => {
            firebase.database.ref('todos').off('value');
        }
        // eslint-disable-next-line
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
