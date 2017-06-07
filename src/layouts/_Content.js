// Import modules
import React from 'react';

export default class _Content extends React.Component {
    render() {
        return (
            <div className="content">
                {this.props.children}
            </div>
        )
    }
}