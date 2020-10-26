import React, { Component } from 'react';
import Header from "../components/BkadTaiming/Header";


export default class BkadTaimingPage extends Component {

    render() {
        let pageStyle = {
            position: 'relative',
            height: '100%',
            backgroundImage: 'url(/img/fon-digital-projects.png)',
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
