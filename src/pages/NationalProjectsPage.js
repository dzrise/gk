import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import Header from "../components/NationalProjectsPage/Header";
import Card from "../components/NationalProjectsPage/Card";

export default class NationalProjectsPage extends Component {

    render() {
        let pageStyle = {
            position: 'relative',
            height: '100%',
            backgroundImage: 'url(/img/fonlandproject.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom center',
            backgroundSize: '100% 100%',
        }
        let styleInner = {
            padding: '100px 50px 0 50px'
        }
        return (
            <>
                <div className="national-projects" style={pageStyle}>
                    <Header/>
                    <div className='national-projects__inner' style={styleInner}>
                        <Card />

                    </div>
                </div>
            </>
        );
    }
}
