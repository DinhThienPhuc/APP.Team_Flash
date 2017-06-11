// Import modules
import React from 'react';

export default class _Preview extends React.Component {
    render() {
        return (
            <div className="preview">
                {this.props.children}
            </div>
        )
    }
}