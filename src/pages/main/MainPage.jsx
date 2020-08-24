import {Container} from '@material-ui/core';
import React from 'react';

import {TodoListContainer} from "components";
import {useStyles} from "pages/pageStyle";

export default function MainPage(props) {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <TodoListContainer />
        </Container>
    );
}
