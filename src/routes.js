import React from 'react';
// import { Route } from 'react-router';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import Auth from './views/Auth';

import Home from './views/Home';

import Pdf from './views/Pdf';
import NewPage from './views/newPage'
export default(
    <Router>
        <Switch>
            <Route exact path="/"component={NewPage} ></Route>
            <Route exact path="/home"component={Home} ></Route>
            <Route exact path="/auth"component={Auth} ></Route>
            <Route exact path="/pdf"component={Pdf} ></Route>
        </Switch>
    </Router>
    
)