// Import modules
import React from 'react';
import AppBar from 'material-ui/AppBar';
import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton';
import pure from 'recompose/pure';

// import Account from '../../components/Account/Account.js';
import Menu from '../../components/Menu/Menu.js';
import Search from '../../components/Search/Search.js';

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
                <Menu />
            </div>
        );

        const LogoIcon = (props) => (
            <SvgIcon {...props}>
                <path d="M9528 11997 c-1714 -1459 -3117 -2655 -3117 -2659 -1 -5 446 -8 991 -8 l993 0 -1665 -1665 -1665 -1665 999 -2 998 -3 -1847 -2310 c-1017 -1270 -1853 -2317 -1859 -2325 -16 -22 -116 -108 3527 3045 l3374 2920 -994 5 -993 5 1660 1660 c913 913 1660 1663 1660 1667 0 5 -445 8 -990 8 -544 0 -990 2 -990 5 0 2 672 881 1493 1952 1656 2160 1551 2023 1546 2023 -2 0 -1407 -1194 -3121 -2653z" />
                <path d="M7740 13993 c-1368 -60 -2645 -564 -3675 -1452 -244 -210 -570 -551 -777 -812 -669 -845 -1102 -1878 -1237 -2956 -36 -283 -45 -443 -45 -773 0 -329 9 -490 44 -770 161 -1274 717 -2443 1582 -3325 l167 -170 465 464 465 464 -136 141 c-520 541 -871 1155 -1082 1896 -185 650 -225 1403 -110 2095 108 651 354 1268 726 1823 460 686 1080 1222 1835 1586 588 284 1167 426 1863 457 340 15 600 2 815 -42 l94 -19 563 562 c310 310 563 565 563 568 0 7 -593 133 -775 164 -503 88 -913 118 -1345 99z" />
                <path d="M11733 11798 l-461 -463 140 -145 c514 -533 866 -1150 1077 -1890 185 -650 225 -1403 110 -2095 -138 -833 -502 -1610 -1058 -2260 -629 -736 -1518 -1272 -2466 -1489 -569 -130 -1291 -162 -1715 -75 l-94 19 -563 -562 c-310 -310 -563 -565 -563 -568 0 -6 532 -120 725 -155 698 -127 1257 -146 1908 -64 1076 135 2111 568 2956 1237 261 207 602 533 812 777 774 898 1261 1991 1408 3162 36 283 45 443 45 773 0 329 -9 490 -44 770 -160 1272 -713 2436 -1579 3322 -90 93 -166 168 -170 168 -3 0 -214 -208 -468 -462z" />
            </SvgIcon>
        );

        return <AppBar
            style={Style.NavBar}
            zDepth={1}
            // iconStyleLeft={Style.iconStyleLeft}
            showMenuIconButton={false}
            iconElementLeft={
                (<IconButton style={Style.IconButton}>
                    <LogoIcon />
                </IconButton>)
            }
            iconElementRight={Nav}
        />;
    }

    handleSearch(event) {
        console.log('o nav nhoe: ', event.target.value);
    };
}