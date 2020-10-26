import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NationalProjectsPage from './pages/NationalProjectsPage';
import DigitalEconomyPage from "./pages/DigitalEconomyPage";
import DigitalEconomyProjectsPage from "./pages/DigitalEconomyProjectsPage";
import HistoryCompanyPage from "./pages/HistoryCompanyPage";
import BkadTaimingPage from "./pages/BkadTaimingPage";
import BkadPage from "./pages/BkadPage";
import BkadGeographyPage from "./pages/BkadGeographyPage";

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/bkad/geography' component={BkadGeographyPage} />
                <Route exact path='/bkad/timing' component={BkadTaimingPage} />
                <Route exact path='/bkad' component={BkadPage} />
                <Route exact path='/history-company' component={HistoryCompanyPage} />
                <Route exact path='/digital-economy/projects' component={DigitalEconomyProjectsPage} />
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
