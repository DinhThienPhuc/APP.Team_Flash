// Import modules
import React from 'react';
import {Container, Row, Col, Visible, Hidden} from 'react-grid-system';

// Import Material-UI Components
import FontIcon from 'material-ui/FontIcon';

// Import components & containers
import Search from '../../components/Search/Search.jsx';
import Logo from '../../components/Logo/Logo.jsx';
import Account from '../../components/Account/Account.jsx';
import Menu from '../../components/Menu/Menu.jsx';

// Import Style
import Style from './style.js';

export default class NavBarContainer extends React.Component {
    render() {
        return (
            <Container style={Style.NavBar}>
                <Row>
                    <Col xs={3} sm={3} md={1} lg={1}><Logo/></Col>
                    <Col xs={3} sm={3} md={9} lg={9}>
                        <Hidden xs sm>
                            <Search/>
                        </Hidden>
                        <Visible xs sm>
                            <FontIcon className="material-icons md-48">search</FontIcon>
                        </Visible>
                    </Col>
                    <Col xs={3} sm={3} md={1} lg={1}>
                        <Menu/>
                    </Col>
                    <Col xs={3} sm={3} md={1} lg={1}>
                        <Account/>
                    </Col>
                </Row>
            </Container>
        );
    }
}