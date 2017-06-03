import React from 'react';
import Dialog from 'material-ui/Dialog';

import Style from './style.js';

export default class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            url: '',
            customWidth: ''
        };
        this.handleClose = this.handleClose.bind(this);
        this.loadImage = this.loadImage.bind(this);
    }

    render() {
        const {
            open,
            url,
            customWidth
        } = this.state;

        const customContentStyle = {
            width: customWidth,
            maxWidth: 'none'
        }

        return (
            <Dialog
                modal={false}
                open={open}
                onRequestClose={this.handleClose}
                autoScrollBodyContent={true}
                contentStyle={customContentStyle}
            >
                <div className="borderImage" style={Style.BorderImage}>
                    <img src={url} alt={url} style={Style.Image} />
                </div>
            </Dialog>
        );
    }

    componentDidMount() {
        let browserWidth = window.innerWidth;
        let w;
        if (browserWidth < 768) w = '90%';
        if (768 <= browserWidth && browserWidth < 992) w = '40%';
        if (992 <= browserWidth && browserWidth < 1200) w = '30%';
        if (1200 <= browserWidth) w = '25%';
        this.setState({
            customWidth: w
        });
        this.loadImage();
    }

    async loadImage() {
        const url = window.location.href;
        const lastSlash = url.lastIndexOf('/');
        const id = url.slice(lastSlash + 1);
        const res = await fetch(`/api/heroes/${id}`);
        const result = await res.json();
        this.setState({
            url: result.data.image
        });
    }

    handleClose() {
        this.setState({ open: false });
        window.location.hash = '/';
    };
}