import React, { Component } from 'react';
import logo from '../../../assets/img/logo-digital-economic.png'

export default class LogoDigitalEconomic extends Component {
    render() {
        let styleSlogan = {
            fontFamily: 'Supermolot',
            fontSize: 17,
            color: '#cfd1d2',
            float: 'right',
        }
        return (
           <>
               <img src={logo} alt=""/>
           </>
        );
    }
}
