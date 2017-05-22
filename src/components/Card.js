import React from 'react';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        e.preventDefault();
        return this.props.deleteHero(this.props.hero);
    }

    render() {
        const style = {
            width: '200px'
        }

        console.log('Render hero Row...');
        return (
            <div style={style}>
                <div>
                    <h3>{this.props.hero.heroName}</h3>
                </div>
                <div>
                    <img src={this.props.hero.avata} alt={this.props.hero.realName} style={{ width: '100%' }} />
                </div>
                <div>
                    <p>Name: {this.props.hero.realName}</p>
                </div>
                <div>
                    <button type='button'> Edit </button>
                    <button type='button' onClick={this.handleDelete}> Delete </button>
                </div>
            </div>
        )
    }
}