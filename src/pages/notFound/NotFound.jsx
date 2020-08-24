import React, {useEffect} from 'react';
import {Container, Typography} from '@material-ui/core';
import {useStyles} from "pages/pageStyle";
import {Link} from 'react-router-dom';

export default function NotFound(props) {
    const classes = useStyles();
    useEffect(() => {
        document.title = 'Not Found - Todo List'
    }, []);
    return (
        <>
            <Container  className={classes.container}>
                <Typography variant='h6'>
                    Not found, back to <Link to='/'>Main page</Link>
                </Typography>
            </Container>
        </>
    );
}
