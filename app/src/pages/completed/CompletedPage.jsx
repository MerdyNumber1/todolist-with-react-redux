import React, {useEffect} from 'react';
import {Container} from '@material-ui/core';
import {useStyles} from "pages/pageStyle";
import {CompletedTasks} from 'components';

export default function CompletedPage(props) {
    const classes = useStyles();
    useEffect(() => {
        document.title = 'Completed Tasks - Todo List'
    }, []);
    return (
        <>
            <Container className={classes.container}>
                <CompletedTasks />
            </Container>
        </>
    );
}
