import React from 'react';
import { Hidden, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import Style from './style.js';

export default class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = { url: '' };
        this.loadImage = this.loadImage.bind(this);
    }

    render() {
        const {
            url
        } = this.state;

        return (
            <Row style={Style.Row}>
                <Col xs={12} sm={10} md={8} lg={6} offset={{ sm: 1, md: 2, lg: 3 }}>
                    <div style={Style.BorderImage}>
                        <img
                            src={url}
                            style={Style.Image}
                        />
                    </div>
                </Col>
                <Col sm={1} md={2} lg={3}>
                    <Hidden xs>
                        <Link to='/'>
                            <IconButton
                                style={Style.IconButton}
                            >
                                <NavigationClose />
                            </IconButton>
                        </Link>
                    </Hidden>
                </Col>
            </Row>
        );
    }

    componentDidMount() {
        const loadImage = this.loadImage;

        window.onhashchange = () => {
            document.body.scrollTop = 0;
            loadImage(window.location.hash);
        }

        if (performance.navigation.type == 1) {
            loadImage(window.location.hash);
        }
    }

    async loadImage(url) {
        const lastSlash = url.lastIndexOf('/');
        const id = url.slice(lastSlash + 1);
        const res = await fetch(`/api/heroes/${id}`);
        const result = await res.json();
        this.setState({
            url: result.data.image
        });
    }
}