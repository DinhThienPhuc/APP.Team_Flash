// Import modules
import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

// Import Style
import Style from './style.js';

export default class Logo extends React.Component {
    render() {
        const LogoIcon = (props) => (
            <SvgIcon {...props}>
                <path d="logo"/>
            </SvgIcon>
        );
        return <LogoIcon/>;
    }
}