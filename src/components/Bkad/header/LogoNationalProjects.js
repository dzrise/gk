import React, { Component } from 'react';
import logo from '../../../assets/img/logo-national-projects.png'

export default class LogoNationalProjects extends Component {
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
