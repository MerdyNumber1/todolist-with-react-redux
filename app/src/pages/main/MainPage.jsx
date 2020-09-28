import {Container} from '@material-ui/core';
import React, {useEffect} from 'react';

import {TodoListContainer} from "components";
import {useStyles} from "pages/pageStyle";

export default function MainPage(props) {
    const classes = useStyles();
    useEffect(() => {
        document.title = 'Main - Todo List'
    }, []);
    return (
        <>
            <Container className={classes.container}>
                <TodoListContainer />
            </Container>
        </>
    );
}
