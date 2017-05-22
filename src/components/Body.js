import React from 'react';
import $ from 'jquery';
import Add from './Add.js';
import Search from './Search.js';
import Container from './Container.js';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = { heroes: [] };
        this.deleteHero = this.deleteHero.bind(this);
        this.addHero = this.addHero.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        $.ajax('/heroes').done(result => {
            this.setState({ heroes: result.data });
        });
    }

    addHero(hero) {
        $.ajax({
            url: '/heroes',
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

    deleteHero(hero) {
        $.ajax({
            url: '/heroes',
            type: 'DELETE',
            contentType: 'application/json',
            data: JSON.stringify(hero),
            success: (result) => {
                console.log('ket qua tra ve sau khi xoa 1 em: ', result);
                // this.setState({
                //     heroes: result
                // });
            },
            error: (err) => {
                console.log('Error: ', err);
            }
        });
    }

    render() {
        console.log('Render Hero List...');
        return (
            <div>
                <h1>CW TV Show</h1>
                <Add addHero={this.addHero} />
                <Search />
                <hr />
                <Container heroes={this.state.heroes} deleteHero={this.deleteHero} />
            </div>
        )
    }
}

export default Body;