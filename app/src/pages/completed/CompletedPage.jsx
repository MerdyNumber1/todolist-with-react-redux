import React, {useEffect} from 'react';
import {Container} from '@material-ui/core';
import {useStyles} from "pages/pageStyle";
import {CompletedTasksContainer} from 'components';

export default function CompletedPage(props) {
    const classes = useStyles();
    useEffect(() => {
        document.title = 'Completed Tasks - Todo List'
    }, []);
    return (
        <>
            <Container className={classes.container}>
                <CompletedTasksContainer />
            </Container>
        </>
    );
}
