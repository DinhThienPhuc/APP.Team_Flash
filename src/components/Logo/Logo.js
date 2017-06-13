// Import modules
import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {
    Link
} from 'react-router-dom';

import Style from './style.js';

export default class Logo extends React.Component {
    render() {
        return (
            <Link to='/'>
                <div style={Style.LogoIcon} >
                    <FontIcon className='material-icons' style={Style.Icon}>whatshot</FontIcon>
                </div>
            </Link>
        );
    }
}
