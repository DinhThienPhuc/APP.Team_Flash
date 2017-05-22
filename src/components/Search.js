import React from 'react';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleKeyUp(e) {
        e.preventDefault();
        var formSearch = document.forms.searchFlash;
        var data = formSearch.search.value;
        console.log('data in input box: ', data);
    }

    render() {
        return (
            <div>
                <form name='searchFlash'>
                    <input onKeyUp={this.handleKeyUp} type='text' name='search' placeholder='search' />
                </form>
            </div>
        )
    }
}