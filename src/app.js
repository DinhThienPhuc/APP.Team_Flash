// Import modules
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import AppRoute from './AppRoute.js';

ReactDOM.render(
    (
        <MuiThemeProvider>
            <AppRoute />
        </MuiThemeProvider>
    ),
    document.getElementById('root')
);
