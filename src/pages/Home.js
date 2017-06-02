// Import modules
import React from 'react';
import $ from 'jquery';

import HeroContainer from '../containers/HeroContainer/HeroContainer.js';
import NavBarContainer from '../containers/NavBarContainer/NavBarContainer.js';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { heroes: [] };
    }

    render() {
        const heroes = this.state.heroes;
        return (
            <div>
                <NavBarContainer />
                <HeroContainer heroes={heroes} />
            </div>
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