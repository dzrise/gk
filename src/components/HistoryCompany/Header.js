import React, { Component } from 'react';
import Logo from "./header/Logo";
import LogoDigitalEconomic from "./header/LogoDigitalEconomic";
import GoBack from "./header/GoBack";
import TitleDigital from "./header/TitilDigital";

export default class Header extends Component {
    render() {
        let styleLeft = {
            marginTop: 16,
        }
        let styleRight = {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'start',
        }
        return (
            <header className="header">
                <div className='header__inner'>
                    <div style={styleLeft}>
                        <Logo/>
                        <TitleDigital/>
                    </div>
                    <div style={styleRight}>
                        <LogoDigitalEconomic/>
                        <GoBack/>
                    </div>
                </div>
            </header>
        );
    }
}
