// Import modules
import React from 'react';
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
 * @extends {React.Component}
 */
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
