// Import modules
import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';

// Import Style
import Style from './style.js';

export default class Account extends React.Component {
    render() {
        const Account = <FontIcon className="material-icons">person</FontIcon>;
        return <FlatButton icon={Account} style={Style.Account}/>;
    }
}