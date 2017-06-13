// Import modules
import React from 'react';

export default class _Main extends React.Component {
    render() {
        return (
            <div className="main">
                {this.props.children}
            </div>
        );
    }
}