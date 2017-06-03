// Import modules
import React from 'react';
import StackGrid from 'react-stack-grid';
import $ from 'jquery';

// Import Components & Containers
import CardHero from '../../components/CardHero/CardHero.js';

// Import Style
import Style from './style.js';

export default class HeroContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { heroes: [] };
    }

    render() {
        const heroes = this.state.heroes;
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

    componentDidMount() {
        this.loadData();
    }

    async loadData() {
        const res = await fetch('/api/heroes');
        const result = await res.json();
        this.setState({ heroes: result.data });
    }
}