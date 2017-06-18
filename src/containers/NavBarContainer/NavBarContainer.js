// Import modules
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

// Import components
import Search from '../../components/Search/Search.js';
import Account from '../../components/Account/Account.js';
import Logo from '../../components/Logo/Logo.js';

// Import style
import Style from './style.js';

/**
 * @description 
 * 
 * @export
 * @class NavBarContainer
 * @extends {React.Component}
 */
export default class NavBarContainer extends Component {
    render() {
        const Nav = (
            <div style={Style.Nav}>
                <Search handleSearch={this.handleSearch} />
                <Account />
            </div>
        );

        return <AppBar style={Style.NavBar}
            zDepth={1}
            iconStyleLeft={Style.iconStyleLeft}
            showMenuIconButton={true}
            iconElementLeft={<Logo />}
            iconElementRight={Nav}
        />;
    }
}
