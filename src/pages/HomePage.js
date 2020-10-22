import React, { Component } from 'react';
import Header from "../components/Header";
import HomeMenu from "../components/homeMenu";

export default class HomePage extends Component {

    render() {
        let pageStyle = {
            position: 'relative',
            height: '100%',
            backgroundImage: 'url(/img/fonland.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom center',
            backgroundSize: '100% 100%',
        }
        return (
            <>
                <Header/>
                <div className="home" style={pageStyle}>
                    <HomeMenu/>
                </div>
            </>
        );
    }
}

