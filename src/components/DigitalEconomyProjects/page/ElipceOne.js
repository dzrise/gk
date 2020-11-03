import React, { Component } from 'react';
import LogoPartners from "./LogoPartners";
import TextPartners from "./TextPartners";

export default class ElipceOne extends Component {
    render() {
        let styleTitle = {
            fontFamily: 'Roboto',
            fontSize: 15,
            color: '#ffffff'
        }
        let styleBig= {
            fontFamily: 'Supermolot Black',
            fontSize: 40,
            color: '#ffffff'
        }
        let styleSmall = {
            fontFamily: 'Roboto',
            fontSize: 10,
            color: '#ffffff'
        }
        let styleElipseOne = {
            position: 'absolute',
            backgroundImage: 'url(/img/digitalProjects/elipse1.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'contain',
            width: '92%',
            height: '22%',
            margin: '0 auto',
            display: 'block',
            top: '45%',
            left: 0,
            right: 0,
            zIndex: 1,
        }
        return (
            <div className='elipse-one' id='elipse-one' style={ styleElipseOne}>
                    <div ref={(dotOne) => { this.dotOne = dotOne }} id='dotOne' style={{top: this.props.top+'%',left: this.props.left + '%', position: 'absolute'}}>
                        <LogoPartners img='/img/digitalProjects/logo1.png'/>
                        <TextPartners top='68.333333333%' left='22.035139092%' styleDisplay={this.props.shows ? 'block' : 'none'}>
                            <div className='new-line' style={styleTitle}>Министерство</div>
                            <div className='new-line' style={styleTitle}>Транспорта</div>
                            <div className='new-line' style={styleSmall}><span style={styleBig}>>10</span>млрд. руб.</div>
                        </TextPartners>
                    </div>
            </div>git
        );
    }
}
