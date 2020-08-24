import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {MainPage, CompletedPage, NotFound} from './pages';
import React from 'react';

export function Routes(props) {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={MainPage} />
                <Route exact path='/completed' component={CompletedPage} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}
