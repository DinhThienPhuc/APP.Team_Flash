// Import modules
import React from 'react';

// Import Material-UI Components
import Avatar from 'material-ui/Avatar';

// Import Style
import Style from './style.js';

export default class Logo extends React.Component {
    render() {
        return (
            <div style={Style.Logo}>
                <Avatar
                    src="https://maxcdn.icons8.com/Share/icon/ios7/Cinema//the_flash_sign1600.png"/>
            </div>
        );
    }
}