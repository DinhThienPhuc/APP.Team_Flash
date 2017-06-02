// Import modules
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';

import Logo from '../../components/Logo/Logo.js';
import Account from '../../components/Account/Account.js';
import Menu from '../../components/Menu/Menu.js';
import Search from '../../components/Search/Search.js';

//Import Style
import Style from './style.js';

export default class NavBarContainer extends React.Component {
    render() {
        const Nav = (
            <div style={Style.Nav}>
                <Search/>
                <Menu/>
                <Account/>
            </div>
        );
        const Logo = <ActionFlightTakeoff color={red500}/>;
        const LogoIcon = (props) => (
            <SvgIcon {...props}>
                <path d="logo"/>
            </SvgIcon>
        );
        return <AppBar
            style={Style.NavBar}
            showMenuIconButton={false}
            zDepth={0}
            iconElementLeft={<LogoIcon color={red500}/>}
            iconElementRight={Nav}/>;
    }
}