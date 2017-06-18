// Import modules
import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';

// Import style
import Style from './style.js';

/**
 * @description 
 * 
 * @export
 * @class Account
 * @extends {Component}
 */
export default class Account extends Component {
    render() {
        const Account = <FontIcon className="material-icons">person</FontIcon>;
        return <FlatButton icon={Account} style={Style.Account} />;
    }
}
