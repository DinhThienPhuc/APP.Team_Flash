import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

export default class CardHero extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hovered: false };
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.style = this.style.bind(this);
    }

    render() {
        const imageStyle = {
            borderRadius: '8px',
            maxWidth: '100%',
            height: 'auto'
        }

        const cardMediaStyle = {
            padding: '8px'
        }

        console.log('Render hero Row...');
        return (
            <Card onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} style={this.style()} >
                <CardMedia style={cardMediaStyle}>
                    <img src={this.props.hero.avata} style={imageStyle} />
                </CardMedia>
                <CardHeader
                    title="CW TV Show"
                    subtitle="The Flash"
                    avatar={this.props.hero.avata}
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
            return { boxShadow: 'none', borderRadius: '8px', backgroundColor: '#f2f2f2', cursor: 'pointer' }
        } else {
            return { boxShadow: 'none' }
        }
    }
}