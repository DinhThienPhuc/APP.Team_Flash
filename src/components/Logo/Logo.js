// Import modules
import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import {
    Link
} from 'react-router-dom';

// Import style
import Style from './style.js';

/**
 * @description 
 * 
 * @export
 * @class Logo
 * @extends {Component}
 */
export default class Logo extends Component {
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
