import React, { Component } from 'react';
import Header from "../components/DigitalEconomyProjects/Header";
import LogoCenter from "../components/DigitalEconomyProjects/page/LogoCenter";
import LogoPartners from "../components/DigitalEconomyProjects/page/LogoPartners";
import TextPartners from "../components/DigitalEconomyProjects/page/TextPartners";
import ModalInfoOne from "../components/DigitalEconomyProjects/page/ModalInfoOne";


export default class DigitalEconomyProjectsPage extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: '',
        }
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }
    openModal(e){
        let modal = e.currentTarget.getAttribute('data-modal')
        this.setState({modalIsOpen: modal})
    }

    closeModal(){
        this.setState({modalIsOpen: ''})
    }
    render() {
        let pageStyle = {
            position: 'relative',
            height: '100%',
            backgroundImage: 'url(/img/fon-digital-projects.png)',
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
        return (
            <div style={pageStyle}>
                <Header/>
                <LogoCenter/>
                <div>
                    <LogoPartners img='/img/digitalProjects/logo1.png' top='42.979166667%' left='16.325036603%'/>
                    <TextPartners top='68.333333333%' left='22.035139092%'>
                        <div className='new-line' style={styleTitle}>Министерство</div>
                        <div className='new-line' style={styleTitle}>Транспорта</div>
                        <div className='new-line' style={styleSmall}><span style={styleBig}>>10</span>млрд. руб.</div>
                    </TextPartners>
                </div>
                <LogoPartners img='/img/digitalProjects/logo21.png' top='25.484375%' left='3.733528551%'/>
                <TextPartners top='37.421875%' left='15.88579795%'>
                    <div className='new-line' style={styleTitle}>Почта России</div>
                    <div className='new-line' style={styleSmall}><span style={styleBig}>5.2</span>млрд. руб.</div>
                </TextPartners>
                <LogoPartners img='/img/digitalProjects/logo22.png' top='22.661458333%' left='26.427525622%'/>
                <TextPartners top='25.005208333%' left='36.383601757%'>
                    <div className='new-line' style={styleTitle}>Ростелеком</div>
                    <div className='new-line' style={styleSmall}><span style={styleBig}>500</span>млн. руб.</div>
                </TextPartners>
                <LogoPartners img='/img/digitalProjects/logo23.png' top='53.3125%' left='73.718887262%'/>
                <TextPartners top='67.072916667%' left='82.576866764%'>
                    <div className='new-line' style={styleTitle}>Максимателеком</div>
                    <div className='new-line' style={styleSmall}><span style={styleBig}>230</span>млрн. руб.</div>
                </TextPartners>
                <LogoPartners img='/img/digitalProjects/logo24.png' top='79.057291667%' left='76.061493411%'/>
                <TextPartners top='89.041666667%' left='82.869692533%'>
                    <div className='new-line' style={styleTitle}>ЛЕНОБЛАСТЬ</div>
                    <div className='new-line' style={styleSmall}><span style={styleBig}>900</span>млрн. руб.</div>
                </TextPartners>
                <LogoPartners img='/img/digitalProjects/logo25.png' top='63.296875%' left='56.808199122%'/>
                <TextPartners top='83.442708333%' left='51.243045388%'>
                    <div className='new-line' style={styleTitle}>Министерство</div>
                    <div className='new-line' style={styleTitle}>цифрового развития</div>
                    <div className='new-line' style={styleSmall}><span style={styleBig}>>10</span>млрн. руб.</div>
                </TextPartners>
                <div onClick={this.openModal} data-modal='one' style={{top: '41.9375%', left: '33.601756955%', position:"absolute", display: "inline-block",cursor: 'pointer',zIndex: 3}}>
                    <LogoPartners img='/img/digitalProjects/logo31.png' data-modal='one'/>
                    <TextPartners top='0' left='-100px' data-modal='one'>
                        <div className='new-line' style={styleMid}>ИТ-оборудование</div>
                    </TextPartners>
                </div>
                <div onClick={this.openModal} data-modal='two' style={{top: '30.5625%', left: '64.20204978%', position:"absolute", display: "inline-block",cursor: 'pointer',zIndex: 3}}>
                    <LogoPartners img='/img/digitalProjects/logo32.png' data-modal='two' />
                    <TextPartners top='38.333333333%' left='66.54465593%' data-modal='two'>
                        <div className='new-line' style={styleMid}>Периферийное</div>
                        <div className='new-line' style={styleMid}>оборудование</div>
                    </TextPartners>
                </div>
                <LogoPartners img='/img/digitalProjects/logo33.png' top='42.067708333%' left='84.040995608%'/>
                <TextPartners top='52.572916667%' left='87.188872621%'>
                    <div className='new-line' style={styleMid}>Телекоммуникационное</div>
                    <div className='new-line' style={styleMid}>оборудование </div>
                </TextPartners>
                <ModalInfoOne isOpen={this.state.modalIsOpen === 'one'} closeModal={() => {this.closeModal()}} backImg='/img/digitalProjects/modal1/line.png'>
                    <h3 style={{fontFamily: 'Roboto',fontSize: 15, marginBottom: 30,color: '#4d4d4f'}}>ИТ-оборудование</h3>
                    <img style={{margin: '0 auto', display: "block"}} src="/img/digitalProjects/modal1/log.png" alt=""/>
                </ModalInfoOne>
                <ModalInfoOne isOpen={this.state.modalIsOpen === 'two'} closeModal={() => {this.closeModal()}} backImg='/img/digitalProjects/modal1/line2.png'>
                    <h3 style={{fontFamily: 'Roboto',fontSize: 15, marginBottom: 30,color: '#4d4d4f'}}>Периферийное оборудование</h3>
                    <img style={{margin: '0 auto', display: "block"}} src="/img/digitalProjects/modal1/log2.png" alt=""/>
                </ModalInfoOne>
            </div>

        );
    }
}
