import React from 'react';
import {AppBar, Container, Toolbar, Typography, Button, makeStyles} from "@material-ui/core";
import {Link} from 'react-router-dom';

export default function(props) {
    const classes = useStyles();
    return (
        <AppBar>
            <Container>
                <Toolbar position='fixed'>
                    <Typography  className={classes.navTitle} variant='h6'>To-do List</Typography>
                    <Link to='/' className={classes.navBtn}><Button className={classes.navBtn}>Main</Button></Link>
                    <Link to='/completed' className={classes.navBtn}><Button className={classes.navBtn}>Completed</Button></Link>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

const useStyles = makeStyles({
    navTitle: {
        flexGrow: 1,
    },
    navBtn: {
        color: 'white',
        textDecoration: 'none'
    }
});
