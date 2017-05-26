// Import modules
import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dataSource: [] };
        this.handleUpdateInput = this.handleUpdateInput.bind(this);
    }

    render() {
        return (
            <div>
                <AutoComplete
                    hintText="Search"
                    dataSource={this.state.dataSource}
                    onUpdateInput={this.handleUpdateInput}
                    fullWidth={true}
                />
            </div>
        )
    }

    handleKeyUp(e) {
        e.preventDefault();
        var formSearch = document.forms.searchFlash;
        var data = formSearch.search.value;
    }

    handleUpdateInput(value, e) {
        e.preventDefault();
        this.setState({
            dataSource: [
                value,
                value + value,
                value + value + value,
            ],
        });
    };
}