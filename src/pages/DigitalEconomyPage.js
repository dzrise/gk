import React, { Component } from 'react';
import Header from "../components/NationalProjectsPage/Header";

export default class DigitalEconomyPage extends Component {

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
                <div className="digital-economy" style={pageStyle}>
                    <Header/>
                </div>
            </>
        );
    }
}
