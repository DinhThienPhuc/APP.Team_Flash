import React from 'react';

export default class Card extends React.Component {
    render() {
        const style = {
            width: '200px'
        }

        console.log('Render hero Row...');
        return (
            <div style={style}>
                <div>
                    <img src={this.props.hero.avata} alt={this.props.hero.realName} style={{ width: '100%' }} />
                </div>
                <div>
                    <p>Name: {this.props.hero.realName}</p>
                </div>
            </div>
        )
    }
}