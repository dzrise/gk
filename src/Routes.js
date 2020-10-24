import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NationalProjectsPage from './pages/NationalProjectsPage';
import DigitalEconomyPage from "./pages/DigitalEconomyPage";

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/digital-economy' component={DigitalEconomyPage} />
                <Route exact path='/national-projects' component={NationalProjectsPage} />
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
