import React, { Component } from 'react';
import logo from  '../../../assets/img/logo-min.png'
export default class Logo extends Component {
    render() {
        let styleLogo = {
            display: 'inline-block',
            float: 'left',
        }
        return (
            <div className='header__Logo' style={styleLogo}>
                <img src={logo} alt=""/>
            </div>
        );
    }
}
