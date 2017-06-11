// Import modules
import React from 'react';
import AppBar from 'material-ui/AppBar';
import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import pure from 'recompose/pure';

// import Account from '../../components/Account/Account.js';
import Menu from '../../components/Menu/Menu.js';
import Search from '../../components/Search/Search.js';
import Account from '../../components/Account/Account.js';

//Import Style
import Style from './style.js';

export default class NavBarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }

    render() {
        const Nav = (
            <div style={Style.Nav}>
                <Search handleSearch={this.handleSearch} />
                {/*<Menu />*/}
                <Account />
            </div>
        );

        const LogoIcon = (
            <div style={Style.LogoIcon}>
                <FontIcon className="material-icons" style={Style.Icon}>whatshot</FontIcon>
            </div>
        );

        return <AppBar
            style={Style.NavBar}
            zDepth={1}
            // iconStyleLeft={Style.iconStyleLeft}
            showMenuIconButton={true}
            iconElementLeft={LogoIcon}
            iconElementRight={Nav}
        />;
    }

    handleSearch(event) {
        console.log('o nav nhoe: ', event.target.value);
    };
}