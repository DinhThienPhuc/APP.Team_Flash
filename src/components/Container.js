import React from 'react';
import Card from './Card.js';

export default class Container extends React.Component {
    render() {
        const heroCards = this.props.heroes.map(function (hero) {
            return <Card key={hero._id} hero={hero} />
        });
        console.log('Render Hero Table...');
        return (
            <div>
                {heroCards}
            </div>
        )
    }
}