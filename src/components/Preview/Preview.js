// Import modules
import React, { Component } from 'react';
import {
    Hidden,
    Row,
    Col
} from 'react-grid-system';
import {
    Link
} from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

// Import style
import Style from './style.js';

/**
 * @description 
 * 
 * @export
 * @class Preview
 * @extends {Component}
 */
export default class Preview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: ''
        };
        this.setImageUrl = this.setImageUrl.bind(this);
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
        const imageId = this.props.location.pathname.slice(1);
        this.setImageUrl(imageId);
    }

    componentWillReceiveProps(nextProps) {
        const imageId = nextProps.match.params.id;
        this.setImageUrl(imageId);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !(this.state.url === nextState.url);
    }

    async setImageUrl(id) {
        const res = await fetch(`/api/heroes/${id}`);
        const result = await res.json();
        this.setState({
            url: result.data.image
        });
    }
}
