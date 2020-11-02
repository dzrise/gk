import React, { Component } from 'react';
import Header from "../components/BkadTaiming/Header";
import TimeLine from "../components/BkadTaiming/Page/TimeLine";
import DisplayInfo from "../components/BkadTaiming/Page/DisplayInfo";
import DisplayInfoTop from "../components/BkadTaiming/Page/DisplayInfoTop";
import NewYers from "../components/BkadTaiming/Page/NewYers";

export default class BkadTaimingPage extends Component {
    constructor() {
        super();
        this.state = {
            active: 0,
        }
        this.activeThis = this.activeThis.bind(this)
    }

    activeThis(id) {
       this.setState({'active': id})

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
        return (
            <div style={pageStyle}>
                <Header/>
                <div style={{padding: '100px 50px 0 50px',display: 'flex', alignItems: 'center', height: '100%'}}>
                    <div style={{width: '100%'}}>
                        <div style={{display: 'flex', marginBottom: 30}}>
                            <div style={{width: '55%', color: '#666666',fontFamily: 'Roboto',fontSize: 13}}>ИТОГИ РЕАЛИЗАЦИИ</div>
                            <div style={{width: '45%', color: '#ffffff',fontFamily: 'Roboto',fontSize: 13}}>ПЛАНЫ НА 2020 - 2024 гг.</div>
                        </div>
                        <div style={{position: 'relative', display: 'flex', marginBottom: 30}}>
                            <div style={{width: '55%'}}></div>
                            <div style={{width: '45%', height: '100px', display: 'flex', }}>
                                <NewYers marginLeft='20px' display={this.state.active === 7 ? 'none':'block' }>
                                    2021
                                </NewYers>
                                <NewYers display={this.state.active === 8 ? 'none':'block' }>
                                    2022
                                </NewYers>
                                <NewYers display={this.state.active === 9 ? 'none':'block' }>
                                    2023
                                </NewYers>
                                <NewYers display={this.state.active === 10 ? 'none':'block' }>
                                    2024
                                </NewYers>
                            </div>
                            <DisplayInfoTop active={this.state.active} />
                        </div>
                        <TimeLine active={this.state.active}  activeThis={(id) => {this.activeThis(id)}}/>
                        <div style={{display: 'flex', marginBottom: 30}}>
                            <DisplayInfo active={this.state.active}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
