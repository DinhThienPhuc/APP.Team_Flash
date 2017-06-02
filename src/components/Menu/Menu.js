// Import modules
import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';

// Import Style
import Style from './style.js';

export default class Menu extends React.Component {
    render() {
        const Menu = <FontIcon className="material-icons">menu</FontIcon>;
        return <FlatButton icon={Menu} style={Style.Menu}/>;
    }
}