import React, { Component } from 'react';
import Header from "../components/HomePage/Header";
import HomeMenuV2 from "../components/HomePage/HomeMenuV2";

export default class HomePageV2 extends Component {

    render() {
        let pageStyle = {
            position: 'relative',
            height: '100%',
        }
        return (
            <>
                <Header/>
                <div className="home" style={pageStyle}>
                    <HomeMenuV2/>
                </div>
            </>
        );
    }
}
