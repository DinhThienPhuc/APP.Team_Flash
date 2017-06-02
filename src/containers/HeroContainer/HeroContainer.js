// Import modules
import React from 'react';
import StackGrid from 'react-stack-grid';

// Import Components & Containers
import CardHero from '../../components/CardHero/CardHero.js';

// Import Style
import Style from './style.js';

export default class HeroContainer extends React.Component {
    render() {
        const heroes = this.props.heroes;
        return (
            <StackGrid
                columnWidth={245}
                gutterWidth={10}
                gutterHeight={30}
                style={Style.Hero}>
                {heroes.map(hero => <CardHero key={hero._id} hero={hero} />)}
            </StackGrid>
        )
    }
}