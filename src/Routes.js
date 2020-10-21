import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' componet={HomePage} />
                <Route exact path='/projects' componet={ProjectsPage} />
                <Route
                    render={function() {
                       return <h1>404 Not Found</h1>;
                    }}
                />
            </Switch>
        );
    }
}

export default Routes;
