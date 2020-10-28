import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from "../components/BkadGeography/Header";
import Map from "../components/BkadGeography/page/Map";
export default class BkadGeographyPage extends Component {
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
                <Map/>
            </div>
        );
    }
}
