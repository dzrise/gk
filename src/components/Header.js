import React, { Component } from 'react';
import Logo from "./header/Logo";
import Slogan from "./header/Slogan";

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className='header__inner'>
                    <Logo/>
                    <Slogan/>
                </div>
            </header>
        );
    }
}
