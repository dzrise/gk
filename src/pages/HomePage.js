import React, { Component } from 'react';
import Header from "../components/Header";

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

                </div>
            </>
        );
    }
}

