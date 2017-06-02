// Import modules
import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

// Import Style
import Style from './style.js';

export default class CardHero extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hovered: false };
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.style = this.style.bind(this);
    }

    render() {
        const hero = this.props.hero;
        return (
            <Card onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} style={this.style()} >
                <CardMedia style={Style.cardMedia}>
                    <img src={hero.image} style={Style.image} />
                </CardMedia>
                <CardHeader
                    title={hero.show}
                    subtitle={hero.subtitle}
                    avatar={hero.avatar}
                />
            </Card>
        )
    }

    // Style Card
    onMouseOver() {
        this.setState({ hovered: true });
    }

    onMouseOut() {
        this.setState({ hovered: false });
    }

    style() {
        if (this.state.hovered) {
            return Style.hoveredCard;
        } else {
            return Style.unhoveredCard;
        }
    }
}