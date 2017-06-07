// Import modules
import React from 'react';
import AppBar from 'material-ui/AppBar';
import SvgIcon from 'material-ui/SvgIcon';
import pure from 'recompose/pure';

import Account from '../../components/Account/Account.js';
import Menu from '../../components/Menu/Menu.js';
import Search from '../../components/Search/Search.js';

//Import Style
import Style from './style.js';

export default class NavBarContainer extends React.Component {
    render() {
        const Nav = (
            <div style={Style.Nav}>
                <Search />
                <Menu />
                <Account />
            </div>
        );
        let LogoIcon = (props) => (
            <SvgIcon {...props}>
                <path d="M0 8000 l0 -8000 8000 0 8000 0 0 8000 0 8000 -8000 0 -8000 0 0-8000z" />
            </SvgIcon>
        );

        LogoIcon = pure(LogoIcon);
        LogoIcon.displayName = 'ActionAccessibility';
        LogoIcon.muiName = 'SvgIcon';

        return <AppBar
            style={Style.NavBar}
            zDepth={1}
            showMenuIconButton={true}
            // iconElementLeft={<LogoIcon />}
            iconElementRight={Nav} />;
    }
}