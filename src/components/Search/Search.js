// Import modules
import React from 'react';
import { Row, Col, Visible, Hidden } from 'react-grid-system';
import AutoComplete from 'material-ui/AutoComplete';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';

// Import Style
import Style from './style.js';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        };
        this.handleUpdateInput = this.handleUpdateInput.bind(this);
    }

    render() {
        const searchIcon = <FontIcon className="material-icons">search</FontIcon>;
        return (
            <div style={Style.Row}>
                <Hidden xs sm>
                    <AutoComplete
                        style={Style.Search}
                        hintText="Search"
                        dataSource={this.state.dataSource}
                        onUpdateInput={this.handleUpdateInput}
                        fullWidth={false} />
                </Hidden>
                <Visible xs sm>
                    <FlatButton icon={searchIcon} style={Style.searchIcon} />
                </Visible>
            </div>
        )
    }

    handleUpdateInput(value, e) {
        e.preventDefault();
        this.setState({
            dataSource: [
                value, value + value,
                value + value + value
            ]
        });
    };
}