// Import React modules
import React from 'react';
import $ from 'jquery';

// Import components
import Add from '../components/Add.js';
import Search from '../components/Search.js';
import ContainerHero from '../components/ContainerHero.js';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { heroes: [] };
        this.addHero = this.addHero.bind(this);
    }

    render() {
        console.log('Render Hero List...');
        return (
            <div>
                <h1>CW TV Show</h1>
                <Add addHero={this.addHero} />
                <Search />
                <hr />
                <ContainerHero heroes={this.state.heroes} />
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