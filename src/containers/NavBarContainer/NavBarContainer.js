// Import modules
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Search from '../../components/Search/Search.js';
import Account from '../../components/Account/Account.js';
import Logo from '../../components/Logo/Logo.js';

// Import Style
import Style from './style.js';

export default class NavBarContainer extends React.Component {
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
            iconElementLeft={<Logo/>}
            iconElementRight={Nav}
        />;
    }
}
