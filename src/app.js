// Import modules
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Import Pages
import Home from './pages/Home.js';
import NotFound from './pages/NotFound.js';

// Import Material-UI Theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
    (
        <MuiThemeProvider>
            <Router>
                <Switch>
                    <Route path="/" component={Home} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        </MuiThemeProvider>
    ),
    document.getElementById('root')
);