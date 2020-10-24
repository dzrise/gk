import React, { Component } from 'react';
export default class Rout extends Component {
    render() {
        let back = this.props.back || 'none'
        let styleRout = {
            width: 10,
            height: 10,
            border: '1px solid #ffffff',
            borderRadius: '100%',
            background: back
        }
        return (
            <div style={styleRout}>

            </div>
        );
    }
}
