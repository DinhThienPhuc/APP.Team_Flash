// Import modules
import React from 'react';

// Import Material-UI Components
import FontIcon from 'material-ui/FontIcon';

// Import Style
import Style from './style.js';

export default class Logo extends React.Component {
    render() {
        return (
            <div style={Style.Account}>
                <FontIcon className="material-icons md-48">account_circle</FontIcon>
            </div>
        );
    }
}