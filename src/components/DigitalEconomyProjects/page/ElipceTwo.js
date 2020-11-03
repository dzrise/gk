import React, { Component } from 'react';
import LogoPartners from "./LogoPartners";
import TextPartners from "./TextPartners";

export default class ElipceTwo extends Component {
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
        let styleElipseTwo = {
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
            zIndex: 2,
        }
        return (
            <div  className='elipse-two' style={ styleElipseTwo}>
                <div ref={(dotTwoOne) => { this.dotTwoOne = dotTwoOne }}>
                    <LogoPartners img='/img/digitalProjects/logo21.png' top='25.484375%' left='3.733528551%' />
                    <TextPartners top='37.421875%' left='15.88579795%' styleDisplay={this.props.shows[2] ? 'block' : 'none'}>
                        <div className='new-line' style={styleTitle}>Почта России</div>
                        <div className='new-line' style={styleSmall}><span style={styleBig}>5.2</span>млрд. руб.</div>
                    </TextPartners>
                </div>
                <div ref={(dotTwoTwo) => { this.dotTwoTwo = dotTwoTwo }}>
                    <LogoPartners img='/img/digitalProjects/logo22.png' top='22.661458333%' left='26.427525622%'/>
                    <TextPartners top='25.005208333%' left='36.383601757%' styleDisplay={this.props.shows[3] ? 'block' : 'none'}>
                        <div className='new-line' style={styleTitle}>Ростелеком</div>
                        <div className='new-line' style={styleSmall}><span style={styleBig}>500</span>млн. руб.</div>
                    </TextPartners>
                </div>
                <div ref={(dotTwoThree) => { this.dotTwoThree = dotTwoThree }}>
                    <LogoPartners img='/img/digitalProjects/logo23.png' top='53.3125%' left='73.718887262%'/>
                    <TextPartners top='67.072916667%' left='82.576866764%' styleDisplay={this.props.shows[4] ? 'block' : 'none'}>
                        <div className='new-line' style={styleTitle}>Максимателеком</div>
                        <div className='new-line' style={styleSmall}><span style={styleBig}>230</span>млрн. руб.</div>
                    </TextPartners>
                </div>
                <div ref={(dotTwoFour) => { this.dotTwoFour = dotTwoFour }}>
                    <LogoPartners img='/img/digitalProjects/logo24.png' top='79.057291667%' left='76.061493411%'/>
                    <TextPartners top='89.041666667%' left='82.869692533%' styleDisplay={this.props.shows[5] ? 'block' : 'none'}>
                        <div className='new-line' style={styleTitle}>ЛЕНОБЛАСТЬ</div>
                        <div className='new-line' style={styleSmall}><span style={styleBig}>900</span>млрн. руб.</div>
                    </TextPartners>
                </div>
                <div ref={(dotTwoFive) => { this.dotTwoFive = dotTwoFive }}>
                    <LogoPartners img='/img/digitalProjects/logo25.png' top='63.296875%' left='56.808199122%'/>
                    <TextPartners top='83.442708333%' left='51.243045388%' styleDisplay={this.props.shows[6] ? 'block' : 'none'}>
                        <div className='new-line' style={styleTitle}>Министерство</div>
                        <div className='new-line' style={styleTitle}>цифрового развития</div>
                        <div className='new-line' style={styleSmall}><span style={styleBig}>>10</span>млрн. руб.</div>
                    </TextPartners>
                </div>
            </div>
        );
    }
}
