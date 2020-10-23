import React, { Component } from 'react';
import Logo from "./header/Logo";
import LogoNationalProjects from "./header/LogoNationalProjects";
import GoBack from "./header/GoBack";

export default class Header extends Component {
    render() {
        let styleRight = {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'start',
        }
        return (
            <header className="header">
                <div className='header__inner'>
                    <Logo/>
                    <div style={styleRight}>
                        <LogoNationalProjects/>
                        <GoBack/>
                    </div>
                </div>
            </header>
        );
    }
}
