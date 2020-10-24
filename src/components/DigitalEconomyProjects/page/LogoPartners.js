import React, { Component } from 'react';

export default class LogoPartners extends Component {
    render() {
        let styleLogoPartners = {
            position: 'absolute',
            top: this.props.top,
            left: this.props.left,
        }
        return (
            <div style={styleLogoPartners}>
                <img src={this.props.img} alt=""/>
            </div>
        );
    }
}
