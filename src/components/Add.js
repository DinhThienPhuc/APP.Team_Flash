import React from 'react';

export default class Add extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        console.log('Render Hero Add...');
        return (
            <div>
                <form name="addHero">
                    <input type="text" name="avata" placeholder="Url" />
                    <input type="text" name="heroName" placeholder="Hero Name" />
                    <input type="text" name="realName" placeholder="Real Name" />
                    <button onClick={this.handleSubmit}>Add Hero</button>
                </form>
            </div>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        var form = document.forms.addHero;
        this.props.addHero({ heroName: form.heroName.value, realName: form.realName.value, avata: form.avata.value });
        form.avata.value = '';
        form.heroName.value = '';
        form.realName.value = '';
    }
}