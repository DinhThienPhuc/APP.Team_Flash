import React from 'react';
import CardHero from './CardHero.js';
import StackGrid from 'react-stack-grid';
import { Row, Col } from 'react-grid-system';

export default class ContainerHero extends React.Component {
    render() {
        console.log('Render Hero Table...');
        return (
            <StackGrid columnWidth={245} gutterWidth={10} gutterHeight={30}>
                {this.props.heroes.map(function (hero) {
                    return <CardHero key={hero._id} hero={hero} />;
                })}
            </StackGrid>
        )
    }
}