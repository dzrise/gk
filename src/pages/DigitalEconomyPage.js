import React, { Component } from 'react';
import Header from "../components/DigitalEconomy/Header";
import DigitalCard from "../components/DigitalEconomy/page/DigitalCard";
import CardOne from "../components/DigitalEconomy/page/CardOne";
import CardTwo from "../components/DigitalEconomy/page/CardTwo";
import CardThree from "../components/DigitalEconomy/page/CardThree";
import RightCard from "../components/DigitalEconomy/page/RightCard";
import RightCardOne from "../components/DigitalEconomy/page/RightCardOne";
import RightCardTwo from "../components/DigitalEconomy/page/RightCardTwo";
import RightCardThree from "../components/DigitalEconomy/page/RightCardThree";
import Rout from "../components/DigitalEconomy/page/Rout";
import ButtonProjects from "../components/DigitalEconomy/page/ButtonProjects";

export default class DigitalEconomyPage extends Component {
    constructor() {
        super();
        this.state = { active: 1, zIndexOne: 3, zIndexTwo: 2, zIndexThree: 1,}
    }

    render() {
        let pageStyle = {
            position: 'relative',
            height: '100%',
            backgroundImage: 'url(/img/fondigital.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom center',
            backgroundSize: '100% 100%',
        }
        let styleInner = {
            padding: '125px 50px 0 50px',
            display: 'flex',
        }
        let styleCol = {
            position: 'relative',
            flexBasis: 0,
            flexGrow: 1,
            maxWidth: '100%',
        }
        let styleRoutWrapper = {
            display: 'flex',
            justifyContent: 'center',
        }
        let styleRout = {
            width: '50px',
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 50
        }
        return (
            <>
                <div className="digital-economy" style={pageStyle}>
                    <Header/>
                    <div className='digital-economy__inner' style={styleInner}>
                        <div style={styleCol}>
                            <DigitalCard left='0px' zIndex={this.state.zIndexOne}>
                                <CardOne  display={this.state.active === 1 ? 'block' : 'none'}/>
                            </DigitalCard>
                            <DigitalCard left='70px' zIndex={this.state.zIndexTwo}>
                                <CardTwo  display={this.state.active === 2 ? 'block' : 'none'}/>
                            </DigitalCard>
                            <DigitalCard left='140px' zIndex={this.state.zIndexThree}>
                                <CardThree  display={this.state.active === 3 ? 'block' : 'none'}/>
                            </DigitalCard>
                        </div>
                        <div style={styleCol}>
                            <RightCard display={this.state.active === 1 ? 'block' : 'none'}>
                                <RightCardOne/>
                            </RightCard>
                            <RightCard display={this.state.active === 2 ? 'block' : 'none'}>
                                <RightCardTwo/>
                            </RightCard>
                            <RightCard display={this.state.active === 3 ? 'block' : 'none'}>
                                <RightCardThree/>
                            </RightCard>
                            <div style={styleRoutWrapper}>
                                <div className='tools' style={styleRout}>
                                    <Rout className={this.state.active === 1 ? 'active': ''} onClick={()=>{this.setState({active: 1, zIndexOne: 3, zIndexTwo: 2, zIndexThree: 1})}}/>
                                    <Rout className={this.state.active === 2 ? 'active': ''} onClick={()=>{this.setState({active: 2, zIndexOne: 1, zIndexTwo: 3, zIndexThree: 2})}}/>
                                    <Rout className={this.state.active === 3 ? 'active': ''} onClick={()=>{this.setState({active: 3, zIndexOne: 1, zIndexTwo: 2, zIndexThree: 3})}}/>
                                </div>
                            </div>
                            <ButtonProjects/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
