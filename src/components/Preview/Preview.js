import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import Style from './style.js';

export default class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            url: '',
            show: ''
        };
        this.handleClose = this.handleClose.bind(this);
        this.loadImage = this.loadImage.bind(this);
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
        ];

        const {
            open,
            url,
            show
        } = this.state;

        return (
            <Dialog
                title={show}
                actions={actions}
                modal={false}
                open={open}
                onRequestClose={this.handleClose}
                autoScrollBodyContent={true}
                bodyStyle={Style.Dialog}
            >
                <div>
                    <img src={url} alt={url} style={Style.Image} />
                </div>
            </Dialog>
        );
    }

    componentDidMount() {
        this.loadImage();
    }

    async loadImage() {
        const url = window.location.href;
        const lastSlash = url.lastIndexOf('/');
        const id = url.slice(lastSlash + 1);
        const res = await fetch(`/api/heroes/${id}`);
        const result = await res.json();
        this.setState({
            url: result.data.image,
            show: result.data.show
        });
    }

    handleClose() {
        this.setState({ open: false });
        window.location.hash = '/';
    };
}