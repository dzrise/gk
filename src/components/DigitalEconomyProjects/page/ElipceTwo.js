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
            backgroundImage: 'url(/img/digitalProjects/elipse2.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'contain',
            width: '92%',
            height: '60%',
            margin: '0 auto',
            display: 'block',
            top: '25%',
            left: 0,
            right: 0,
            zIndex: 2,
        }
        return (
            <div id='elipse-two'  className='elipse-two' style={ styleElipseTwo}>
                {/*<div ref={(dotTwoOne) => { this.dotTwoOne = dotTwoOne }} style={{top: this.props.post[0].left+'%',left: this.props.post[0].top + '%', position: 'absolute'}}>*/}
                {/*    <LogoPartners img='/img/digitalProjects/logo21.png' />*/}
                {/*    <TextPartners top='37.421875%' left='15.88579795%' styleDisplay={this.props.shows[2] ? 'block' : 'none'}>*/}
                {/*        <div className='new-line' style={styleTitle}>Почта России</div>*/}
                {/*        <div className='new-line' style={styleSmall}><span style={styleBig}>5.2</span>млрд. руб.</div>*/}
                {/*    </TextPartners>*/}
                {/*</div>*/}
                {/*<div ref={(dotTwoTwo) => { this.dotTwoTwo = dotTwoTwo }} style={{top: this.props.post[1].top+'%',left: this.props.post[1].top + '%', position: 'absolute'}}>*/}
                {/*    <LogoPartners img='/img/digitalProjects/logo22.png' />*/}
                {/*    <TextPartners top='25.005208333%' left='36.383601757%' styleDisplay={this.props.shows[3] ? 'block' : 'none'}>*/}
                {/*        <div className='new-line' style={styleTitle}>Ростелеком</div>*/}
                {/*        <div className='new-line' style={styleSmall}><span style={styleBig}>500</span>млн. руб.</div>*/}
                {/*    </TextPartners>*/}
                {/*</div>*/}
                {/*<div ref={(dotTwoThree) => { this.dotTwoThree = dotTwoThree }} style={{top: this.props.post[2].top+'%',left: this.props.post[2].top + '%', position: 'absolute'}}>*/}
                {/*    <LogoPartners img='/img/digitalProjects/logo23.png' />*/}
                {/*    <TextPartners top='67.072916667%' left='82.576866764%' styleDisplay={this.props.shows[4] ? 'block' : 'none'}>*/}
                {/*        <div className='new-line' style={styleTitle}>Максимателеком</div>*/}
                {/*        <div className='new-line' style={styleSmall}><span style={styleBig}>230</span>млрн. руб.</div>*/}
                {/*    </TextPartners>*/}
                {/*</div>*/}
                {/*<div ref={(dotTwoFour) => { this.dotTwoFour = dotTwoFour }} style={{top: this.props.post[3].top+'%',left: this.props.post[3].top + '%', position: 'absolute'}}>*/}
                {/*    <LogoPartners img='/img/digitalProjects/logo24.png' />*/}
                {/*    <TextPartners top='89.041666667%' left='82.869692533%' styleDisplay={this.props.shows[5] ? 'block' : 'none'}>*/}
                {/*        <div className='new-line' style={styleTitle}>ЛЕНОБЛАСТЬ</div>*/}
                {/*        <div className='new-line' style={styleSmall}><span style={styleBig}>900</span>млрн. руб.</div>*/}
                {/*    </TextPartners>*/}
                {/*</div>*/}
                {/*<div ref={(dotTwoFive) => { this.dotTwoFive = dotTwoFive }} style={{top: this.props.post[4].top+'%',left: this.props.post[4].top + '%', position: 'absolute'}}>*/}
                {/*    <LogoPartners img='/img/digitalProjects/logo25.png' />*/}
                {/*    <TextPartners top='83.442708333%' left='51.243045388%' styleDisplay={this.props.shows[6] ? 'block' : 'none'}>*/}
                {/*        <div className='new-line' style={styleTitle}>Министерство</div>*/}
                {/*        <div className='new-line' style={styleTitle}>цифрового развития</div>*/}
                {/*        <div className='new-line' style={styleSmall}><span style={styleBig}>>10</span>млрн. руб.</div>*/}
                {/*    </TextPartners>*/}
                {/*</div>*/}
            </div>
        );
    }
}
