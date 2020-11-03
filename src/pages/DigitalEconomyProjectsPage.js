import React, { Component } from 'react';
import Header from "../components/DigitalEconomyProjects/Header";
import LogoCenter from "../components/DigitalEconomyProjects/page/LogoCenter";
import LogoPartners from "../components/DigitalEconomyProjects/page/LogoPartners";
import TextPartners from "../components/DigitalEconomyProjects/page/TextPartners";
import ElipceOne from "../components/DigitalEconomyProjects/page/ElipceOne";
import ElipceTwo from "../components/DigitalEconomyProjects/page/ElipceTwo";

let start = 0;
export default class DigitalEconomyProjectsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shows: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            stop: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            pos: {
                dotOne: {
                    top: -5,
                    left: 10.4,
                },
                dotTwo: [{
                        top: -5,
                        left: 10.4,
                    },
                    {
                        top: -5,
                        left: 10.4,
                    },
                    {
                        top: -5,
                        left: 10.4,
                    },
                    {
                        top: -5,
                        left: 10.4,
                    },
                    {
                        top: -5,
                        left: 10.4,
                    },
                ],

            }

        }
        this.orbitOne = this.orbitOne.bind(this)
    }

    componentDidMount() {
        this.interval = setInterval(this.orbitOne, 10)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    orbitOne() {
        let elem = document.getElementById('elipse-one')
        let X = elem.clientWidth,
            Y = elem.clientHeight,
            angle = 0,
            rotate = 0,
            center = {
                X: X / 2,
                Y: Y / 2
            },
            ratio = X / Y;

        if(rotate !== 0){
            angle = Math.PI * parseInt(rotate) / 180;
        }
        start += .02;
        let x = center.X * Math.sin(start),
            y = center.Y * Math.cos(start);

            X = x * Math.cos(angle) - y * Math.sin(angle);
            Y = x * Math.sin(angle) + y * Math.cos(angle);

            let data = {
                dotOne: {
                    left: (center.X + X - 93) / 13.66,
                    top: (center.Y + Y - 120) / 7.68
                }
            }
            if(this.state.stop[1] === false) {
                this.setState({pos: data});
            }
            if(this.state.pos.dotOne.left === 15.47400293164258 ){
                let stop = this.state.stop
                stop[1] = true
                this.setState({stop: stop});
            }
    }
    orbitTwo() {
        let elem = document.getElementById('elipse-two')
        let X = elem.clientWidth,
            Y = elem.clientHeight,
            angle = 0,
            rotate = 0,
            center = {
                X: X / 2,
                Y: Y / 2
            },
            ratio = X / Y;

        if(rotate !== 0){
            angle = Math.PI * parseInt(rotate) / 180;
        }
        start += .02;
        let x = center.X * Math.sin(start),
            y = center.Y * Math.cos(start);

        X = x * Math.cos(angle) - y * Math.sin(angle);
        Y = x * Math.sin(angle) + y * Math.cos(angle);

        let data = {
            dotTwo: {
                left: (center.X + X - 93) / 13.66,
                top: (center.Y + Y - 120) / 7.68
            }
        }
        if(this.state.stop[1] === false) {
            this.setState({pos: data});
        }
        if(this.state.pos.dotOne.left === 15.47400293164258 ){
            let stop = this.state.stop
            stop[1] = true
            this.setState({stop: stop});
        }
    }

    render() {
        let pageStyle = {
            position: 'relative',
            height: '100%',
            backgroundImage: 'url(/img/fonland.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom center',
            backgroundSize: '100% 100%',
        }
        let styleTitle = {
            fontFamily: 'Roboto',
            fontSize: 15,
            color: '#ffffff'
        }
        let styleMid = {
            fontFamily: 'Roboto',
            fontSize: 12,
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
            zIndex: 2,
        }
        let styleElipseThree = {
            zIndex: 3,
        }
        return (
            <div style={pageStyle}>
                <Header/>
                <LogoCenter/>
                <ElipceOne shows={this.state.shows} left={this.state.pos.dotOne.left} top={this.state.pos.dotOne.top} />
                <ElipceTwo shows={this.state.shows} post={this.state.pos.dotTwo}/>
                <div className='elipse-three' style={ styleElipseThree}>
                    <div ref={(dotThreeOne) => { this.dotThreeOne = dotThreeOne }}>
                        <LogoPartners img='/img/digitalProjects/logo31.png' top='41.9375%' left='33.601756955%'/>
                        <TextPartners top='44.28125%' left='27.525622255%' styleDisplay={this.state.shows[7] ? 'block' : 'none'}>
                            <div className='new-line' style={styleMid}>ИТ-оборудование</div>
                        </TextPartners>
                    </div>
                    <div ref={(dotThreeTwo) => { this.dotThreeTwo = dotThreeTwo}}>
                        <LogoPartners img='/img/digitalProjects/logo32.png' top='30.5625%' left='64.20204978%'/>
                        <TextPartners top='38.333333333%' left='66.54465593%' styleDisplay={this.state.shows[8] ? 'block' : 'none'}>
                            <div className='new-line' style={styleMid}>Периферийное</div>
                            <div className='new-line' style={styleMid}>оборудование</div>
                        </TextPartners>
                    </div>
                    <div ref={(dotThreeThree) => { this.dotThreeThree = dotThreeThree }}>
                        <LogoPartners img='/img/digitalProjects/logo33.png' top='42.067708333%' left='84.040995608%'/>
                        <TextPartners top='52.572916667%' left='87.188872621%' styleDisplay={this.state.shows[9] ? 'block' : 'none'}>
                            <div className='new-line' style={styleMid}>Телекоммуникационное</div>
                            <div className='new-line' style={styleMid}>оборудование </div>
                        </TextPartners>
                    </div>
                </div>
            </div>
        );
    }
}
