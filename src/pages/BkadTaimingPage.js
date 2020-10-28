import React, { Component } from 'react';
import Header from "../components/BkadTaiming/Header";
import TimeLine from "../components/BkadTaiming/Page/TimeLine";
import DisplayInfo from "../components/BkadTaiming/Page/DisplayInfo";

export default class BkadTaimingPage extends Component {

    render() {
        let pageStyle = {
            position: 'relative',
            height: '100%',
            backgroundImage: 'url(/img/fonland.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom center',
            backgroundSize: '100% 100%',
        }
        return (
            <div style={pageStyle}>
                <Header/>
                <div style={{padding: '100px 50px 0 50px',display: 'flex', alignItems: 'center', height: '100%'}}>
                    <div style={{width: '100%'}}>
                        <div style={{display: 'flex', marginBottom: 30}}>
                            <div style={{width: '55%', color: '#666666',fontFamily: 'Roboto',fontSize: 13}}>ИТОГИ РЕАЛИЗАЦИИ</div>
                            <div style={{width: '45%', color: '#ffffff',fontFamily: 'Roboto',fontSize: 13}}>ПЛАНЫ НА 2020 - 2024 гг.</div>
                        </div>
                        <div style={{display: 'flex', marginBottom: 30}}>
                            <div style={{width: '55%', color: '#666666',fontFamily: 'Roboto',fontSize: 13}}></div>
                            <div style={{width: '45%', height: '100px', display: 'flex', }}>
                                <div style={{width: "20%", borderLeft: '1px solid #666666', fontFamily: 'Roboto',color: '#666666',marginLeft: '20px'}}>
                                    2021
                                </div>
                                <div style={{width: "20%", height: '100%', borderLeft: '1px solid #666666', fontFamily: 'Roboto',color: '#666666'}}>
                                    2022
                                </div>
                                <div style={{width: "20%",  height: '100%', borderLeft: '1px solid #666666', fontFamily: 'Roboto',  color: '#666666'}}>
                                    2023
                                </div>
                                <div style={{width: "20%", height: '100%', borderLeft: '1px solid #666666', fontFamily: 'Roboto', color: '#666666'}}>
                                    2024
                                </div>
                            </div>
                        </div>
                        <TimeLine />
                        <div style={{display: 'flex', marginBottom: 30}}>
                            <DisplayInfo marginLeft="55%">
                                <div className='new-line'>Общий объем поставки техники</div>
                                <div className='new-line'>в лизинг в 2020-2024 гг. в рамках</div>
                                <div className='new-line'>БКАД на льготных условиях</div>
                                <div className='new-line'>составит ~2 100 ед. на общую</div>
                                <div className='new-line'>сумму более 33 млрд руб.</div>
                            </DisplayInfo>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
