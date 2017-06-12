// Import modules
import React from "react"
import { Visible, Hidden } from "react-grid-system"
import TextField from "material-ui/TextField"
import FontIcon from "material-ui/FontIcon"
import FlatButton from "material-ui/FlatButton"

// Import Style
import Style from "./style.js"

export default class Search extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const searchIcon = <FontIcon className="material-icons">search</FontIcon>
        const handleSearch = this.props.handleSearch
        return (
            <div style={Style.Row}>
                <Hidden xs sm>
                    <TextField
                        hintText="Search"
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
        )
    }
}