import React, { Component } from 'react';
<<<<<<< HEAD
import Header from "../components/HomePage/Header";
import HomeMenu from "../components/HomePage/homeMenu";
=======
import Header from "../components/Header";
import HomeMenu from "../components/homeMenu";
>>>>>>> ca12ea3da7adab26fcb46d60b10031786c0adeb7

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

