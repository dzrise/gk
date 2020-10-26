import React, { Component } from 'react';
import Header from "../components/BkadTaiming/Header";

export default class BkadGeography extends Component {

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
            <div style={pageStyle}>
                <Header/>
            </div>
        );
    }
}
