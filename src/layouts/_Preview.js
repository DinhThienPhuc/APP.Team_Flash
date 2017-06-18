// Import modules
import React, { Component } from 'react';

/**
 * @description 
 * 
 * @export
 * @class _Preview
 * @extends {Component}
 */
export default class _Preview extends Component {
    render() {
        return (
            <div className='preview'>
                {this.props.children}
            </div>
        );
    }
}
