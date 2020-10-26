import React, { Component } from 'react';
import Header from "../components/Bkad/Header";
import ProjectsText from "../components/Bkad/page/ProjectsText";
import ProjectsAccordian from "../components/Bkad/page/ProjectsAccordian";

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
                <div  style={pageStyle}>
                    <Header/>
                    <div style={styleInner}>
                        <ProjectsText/>
                        <ProjectsAccordian/>
                    </div>
                </div>
            </>
        );
    }
}
