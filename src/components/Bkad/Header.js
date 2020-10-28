import React, { Component } from 'react';
import Logo from "./header/Logo";
import LogoNationalProjects from "./header/LogoNationalProjects";
import GoBack from "./header/GoBack";
import Title from "./header/Title";

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
                        <Title/>
                    </div>
                    <div style={styleRight}>
                        <LogoNationalProjects/>
                        <GoBack/>
                    </div>
                </div>
            </header>
        );
    }
}
