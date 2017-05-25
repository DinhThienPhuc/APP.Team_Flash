import React from 'react';
import CardHero from './CardHero.js';

export default class Container extends React.Component {
    render() {
        const containerStyle = {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            height: '100vw',
            overFlow: 'hidden'
        }
        console.log('Render Hero Table...');
        return (
            <div style={containerStyle}>
                {this.props.heroes.map(function (hero) {
                    return <CardHero key={hero._id} hero={hero} />
                })}
            </div>
        )
    }
}