// Import React modules
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Import Components
import Home from './pages/Home.js';
import NotFound from './pages/NotFound.js';

// Import Material-UI Theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const HomePage = () => (
    <MuiThemeProvider>
        <Home />
    </MuiThemeProvider>
);

const NotFoundPage = () => {
    <MuiThemeProvider>
        <NotFound />
    </MuiThemeProvider>
}

ReactDOM.render(
    (
        <Router>
            <Switch>
                <Route path="/" component={HomePage} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
        </Router>
    ),
    document.getElementById('root')
);