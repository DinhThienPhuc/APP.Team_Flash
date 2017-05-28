// Import modules
import React from 'react';
import StackGrid from 'react-stack-grid';

// Import Components & Containers
import CardHero from '../../components/CardHero/CardHero.jsx';

// Import Style
import Style from './style.js';

export default class HeroContainer extends React.Component {
    render() {
        console.log('Render Hero Table...');
        return (
            <StackGrid
                columnWidth={245}
                gutterWidth={10}
                gutterHeight={30}
                style={Style.Hero}>
                {this
                    .props
                    .heroes
                    .map(function (hero) {
                        return <CardHero key={hero._id} hero={hero}/>;
                    })}
            </StackGrid>
        )
    }
}