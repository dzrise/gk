import React, { Component } from 'react';
import Header from "../components/BkadTaiming/Header";
import TimeLine from "../components/BkadTaiming/Page/TimeLine";

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
                <div style={{padding: '0 50px 0 50px',display: 'flex', alignItems: 'center', height: '100%'}}>
                    <div style={{width: '100%'}}>
                        <div style={{display: 'flex', marginBottom: 30}}>
                            <div style={{width: '55%', color: '#666666',fontFamily: 'Roboto',fontSize: 13}}>ИТОГИ РЕАЛИЗАЦИИ</div>
                            <div style={{width: '45%', color: '#ffffff',fontFamily: 'Roboto',fontSize: 13}}>ПЛАНЫ НА 2020 - 2024 гг.</div>
                        </div>
                        <div style={{display: 'flex', marginBottom: 30}}>
                            <div style={{width: '55%', color: '#666666',fontFamily: 'Roboto',fontSize: 13}}></div>
                            <div style={{width: '45%', height: '100px', display: 'flex', }}>
                                <div style={{width: "20%", borderLeft: '1px solid #666666', color: '#666666'}}>
                                    2021
                                </div>
                                <div style={{width: "20%", height: '100%', borderLeft: '1px solid #666666', color: '#666666'}}>
                                    2022
                                </div>
                                <div style={{width: "20%",  height: '100%', borderLeft: '1px solid #666666',  color: '#666666'}}>
                                    2023
                                </div>
                                <div style={{width: "20%", height: '100%', borderLeft: '1px solid #666666',  color: '#666666'}}>
                                    2024
                                </div>
                            </div>
                        </div>
                        <TimeLine />
                        <div style={{display: 'flex', marginBottom: 30}}>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
