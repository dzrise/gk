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
                            <DigitalCard left='0px' zIndex='1'>
                                <CardOne/>
                            </DigitalCard>
                            <DigitalCard left='70px' zIndex='2'>
                                <CardTwo/>
                            </DigitalCard>
                            <DigitalCard left='140px' zIndex='3'>
                                <CardThree/>
                            </DigitalCard>
                        </div>
                        <div style={styleCol}>
                            <RightCard display='none'>
                                <RightCardOne/>
                            </RightCard>
                            <RightCard display='none'>
                                <RightCardTwo/>
                            </RightCard>
                            <RightCard display='block'>
                                <RightCardThree/>
                            </RightCard>
                            <div style={styleRoutWrapper}>
                                <div  style={styleRout}>
                                    <Rout />
                                    <Rout />
                                    <Rout back='#ffffff'/>
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
