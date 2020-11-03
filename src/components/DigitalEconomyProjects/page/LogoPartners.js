import React, { Component } from 'react';

export default class LogoPartners extends Component {
    render() {
        let styleLogoPartners = {
            position: 'absolute',
            left: this.props.left,
            top: this.props.top
        }
        return (
            <div style={styleLogoPartners}>
                <img src={this.props.img} alt=""/>
            </div>
        );
    }
}
