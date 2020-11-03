import React, { Component } from 'react';

export default class TextPartners extends Component {
    render() {
        let styleLogoPartners = {
            position: 'absolute',
            top: this.props.top,
            left: this.props.left,
            display: this.props.styleDisplay
        }
        return (
            <div style={styleLogoPartners}>
                {this.props.children}
            </div>
        );
    }
}
