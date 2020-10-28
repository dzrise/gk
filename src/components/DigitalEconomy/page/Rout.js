import React, { Component } from 'react';
export default class Rout extends Component {
    render() {
        let back = this.props.back || 'none'
        let styleRout = {
            width: 10,
            height: 10,
            border: '1px solid #ffffff',
            borderRadius: '100%',
        }
        return (
            <div style={styleRout} className={this.props.className} onClick={this.props.onClick}>

            </div>
        );
    }
}
