// Import modules
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Import Pages
import HomePage from './pages/HomePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

// Import Material-UI Theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
    (
        <MuiThemeProvider>
            <Router>
                <Switch>
                    <Route path="/" component={HomePage} />
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </Router>
        </MuiThemeProvider>
    ),
    document.getElementById('root')
);