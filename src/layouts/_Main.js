// Import modules
import React, { Component } from 'react';

/**
 * @description 
 * 
 * @export
 * @class _Main
 * @extends {Component}
 */
export default class _Main extends Component {
    render() {
        return (
            <div className="main">
                {this.props.children}
            </div>
        );
    }
}