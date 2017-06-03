// Import modules
import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import HeroContainer from './containers/HeroContainer/HeroContainer.js';
import NavBarContainer from './containers/NavBarContainer/NavBarContainer.js';
import _Main from './layouts/_Main.js';
import Preview from './components/Preview/Preview.js';

const browserHistory = Router.browserHistory;

export default class AppRoute extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Switch>
                    <_Main>
                        <Route path="/" component={NavBarContainer} />
                        <Route path="/:id" component={Preview} />
                        <Route path="/" component={HeroContainer} />
                    </_Main>
                </Switch>
            </Router>
        );
    }
}