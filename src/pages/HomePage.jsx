// Import modules
import React from 'react';
import $ from 'jquery';

// Import Components & Containers
import Add from '../components/Add/Add.jsx';
import Search from '../components/Search/Search.jsx';
import HeroContainer from '../containers/HeroContainer/HeroContainer.jsx';
import NavBarContainer from '../containers/NavBarContainer/NavBarContainer.jsx';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { heroes: [] };
    }

    render() {
        console.log('Render Hero List...');
        return (
            <div>
                <NavBarContainer />
                <HeroContainer heroes={this.state.heroes} />
            </div>
        )
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        $.ajax('/api/heroes').done(result => {
            this.setState({ heroes: result.data });
        });
    }

    addHero(hero) {
        $.ajax({
            url: '/api/heroes',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(hero),
            success: (data) => {
                let newHeroes = this.state.heroes.concat(hero);
                this.setState({
                    heroes: newHeroes
                });
            },
            error: (err) => {
                console.log('Error: ', err);
            }
        });
    }
}