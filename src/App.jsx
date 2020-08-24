import React from 'react';
import {Nav} from 'components';
import {CompletedPage, MainPage, NotFound} from "./pages";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './AppStyle.scss';

const App = (props) => {
  return (
      <>
          <Router>
              <Nav />
              <Switch>
                  <Route exact path='/' component={MainPage} />
                  <Route exact path='/completed' component={CompletedPage} />
                  <Route component={NotFound} />
              </Switch>
          </Router>
      </>
  );
};
export default App;
