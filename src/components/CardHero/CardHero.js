// Import modules
import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardMedia
} from 'material-ui/Card';

// Import style
import Style from './style.js';

/**
 * @description 
 * 
 * @export
 * @class CardHero
 * @extends {Component}
 */
export default class CardHero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false
        };
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.style = this.style.bind(this);
    }

    render() {
        const {
            hero
        } = this.props;
        return (
            <Card
                style={this.style()}
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
            >
                <CardMedia style={Style.cardMedia}>
                    <Link to={{
                        pathname: `/${hero._id}`
                    }}>
                        <img src={hero.image} style={Style.image} />
                    </Link>
                </CardMedia>
                <Link to={{
                    search: `?sort=${hero.show}`
                }}>
                    <CardHeader
                        title={hero.show}
                        subtitle={`${hero.subtitle.slice(0, 25)}`}
                        subtitleStyle={Style.subtitleStyle}
                        avatar={hero.avatar}
                        style={this.style()}
                    />
                </Link>
            </Card>
        );
    }

    // Style Card
    onMouseOver() {
        this.setState({
            hovered: true
        });
    }

    onMouseOut() {
        this.setState({
            hovered: false
        });
    }

    style() {
        if (this.state.hovered) {
            return Style.hoveredCard;
        } else {
            return Style.unhoveredCard;
        }
    }
}
