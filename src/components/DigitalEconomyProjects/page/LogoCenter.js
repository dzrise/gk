import React, { Component } from 'react';

export default class LogoCenter extends Component {
    render() {
        let styleLogoCenter = {
            position: 'absolute',
            top:'55%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }
        return (
            <div style={styleLogoCenter}>
                <img src="/img/digitalProjects/logCenter.png" alt=""/>
            </div>
        );
    }
}
