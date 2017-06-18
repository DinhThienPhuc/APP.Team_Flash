// Import modules
import React, { Component } from 'react';
import {
    Visible,
    Hidden
} from 'react-grid-system';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';

// Import style
import Style from './style.js';

/**
 * @description 
 * 
 * @export
 * @class Search
 * @extends {Component}
 */
export default class Search extends Component {
    render() {
        const searchIcon = <FontIcon className='material-icons'>search</FontIcon>;
        const handleSearch = this.props.handleSearch;
        return (
            <div style={Style.Row}>
                <Hidden xs sm>
                    <TextField
                        hintText='Search'
                        style={Style.Search}
                        hintStyle={Style.inputStyle}
                        inputStyle={Style.inputStyle}
                        fullWidth={false}
                        onChange={handleSearch}
                    />
                </Hidden>
                <Visible xs sm>
                    <FlatButton icon={searchIcon} style={Style.searchIcon} />
                </Visible>
            </div>
        );
    }
}
