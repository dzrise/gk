import React, { Component } from 'react';
import Logo from "./header/Logo";
import LogoProject from "./header/LogoProject";
import GoBack from "./header/GoBack";
import TitleDigital from "./header/Titil";

export default class Header extends Component {
    render() {
        let styleInner = {
            padding: '30xp 50px 0 100px',
        }
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
                <div className='header__inner' style={styleInner}>
                    <div style={styleLeft}>
                        <Logo/>
                        <TitleDigital/>
                    </div>
                    <div style={styleRight}>
                        <LogoProject/>
                        <GoBack/>
                    </div>
                </div>
            </header>
        );
    }
}
