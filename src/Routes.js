import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path='/projects' component={ProjectsPage} />
                <Route exact path='/' component={HomePage} />
                <Route
                    render={function() {
                       return <h1>404 Not Found</h1>;
                    }}
                />
            </Switch>
        );
    }
}
