import React from 'react';
import {AppBar, Container, Toolbar, Typography, ButtonGroup, Button, makeStyles} from "@material-ui/core";

export default function(props) {
    const classes = useStyles();
    return (
        <AppBar>
            <Container>
                <Toolbar position='fixed'>
                    <Typography  className={classes.navTitle} variant='h5'>To-do List</Typography>
                    <ButtonGroup color="primary" variant='contained'>
                        <Button href='/'>Main</Button>
                        <Button href='/completed'>Completed Tasks</Button>
                    </ButtonGroup>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

const useStyles = makeStyles({
    navTitle: {
        flexGrow: 1,
    }
});
