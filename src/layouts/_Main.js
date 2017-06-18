// Import modules
import React from 'react';

/**
 * @description 
 * 
 * @export
 * @class _Main
 * @extends {React.Component}
 */
export default class _Main extends React.Component {
    render() {
        return (
            <div className="main">
                {this.props.children}
            </div>
        );
    }
}