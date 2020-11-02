import React, { Component } from 'react';
export default class DisplayInfoTop extends Component {
    render() {
        let styleComp= {
            color: '#ffffff',
            fontFamily: 'Roboto',
            fontSize: 12,
            lineHeight: 1.5,
            zIndex: 3,
        }
        if(this.props.active === 1) {
            return (
                <div style={{
                    position: "absolute",
                    left: '2%',
                    height: '120px',
                    borderLeft: '1px solid #ffffff',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    zIndex: 5
                }}>
                    <div style={styleComp}>
                        <div className='new-line' style={{marginLeft: 10}}>Ноябрь</div>
                        <div className='new-line' style={{marginLeft: 10}}>2019</div>
                    </div>
                    <img src="/img/bkadtaiming/pick1.png" style={{marginLeft: 20}}/>
                </div>
            );
        }  else if(this.props.active === 2) {
            return (
                <div style={{
                    position: "absolute",
                    left: '11%',
                    height: '120px',
                    borderLeft: '1px solid #ffffff',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    zIndex: 5
                }}>
                    <div style={styleComp}>
                        <div className='new-line' style={{marginLeft: 10}}>Апрель</div>
                        <div className='new-line' style={{marginLeft: 10}}>2020</div>
                    </div>
                    <img src="/img/bkadtaiming/pick2.png" style={{marginLeft: 20}}/>
                </div>
            );
        } else if(this.props.active === 3) {
            return (
                <div style={{
                    position: "absolute",
                    left: '20%',
                    height: '120px',
                    borderLeft: '1px solid #ffffff',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    zIndex: 5
                }}>
                    <div style={styleComp}>
                        <div className='new-line' style={{marginLeft: 10}}>Май</div>
                        <div className='new-line' style={{marginLeft: 10}}>2020</div>
                    </div>
                    <img src="/img/bkadtaiming/pick2.png" style={{marginLeft: 20}}/>
                </div>
            );
        } else if(this.props.active === 4) {
            return (
                <div style={{
                    position: "absolute",
                    left: '29%',
                    height: '120px',
                    borderLeft: '1px solid #ffffff',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    zIndex: 5
                }}>
                    <div style={styleComp}>
                        <div className='new-line' style={{marginLeft: 10}}>Июнь</div>
                        <div className='new-line' style={{marginLeft: 10}}>2020</div>
                    </div>
                    <img src="/img/bkadtaiming/pick2.png" style={{marginLeft: 20}}/>
                </div>
            );
        } else if(this.props.active === 5) {
            return (
                <div style={{
                    position: "absolute",
                    left: '38.5%',
                    height: '120px',
                    borderLeft: '1px solid #ffffff',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    zIndex: 5
                }}>
                    <div style={styleComp}>
                        <div className='new-line' style={{marginLeft: 10}}>Июль</div>
                        <div className='new-line' style={{marginLeft: 10}}>2020</div>
                    </div>
                    <img src="/img/bkadtaiming/pick2.png" style={{marginLeft: 20}}/>
                </div>
            );
        } else if(this.props.active === 6) {
            return (
                <div style={{
                    position: "absolute",
                    left: '47.5%',
                    height: '120px',
                    borderLeft: '1px solid #ffffff',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    zIndex: 5
                }}>
                    <div style={styleComp}>
                        <div className='new-line' style={{marginLeft: 10}}>Сентябрь</div>
                        <div className='new-line' style={{marginLeft: 10}}>2020</div>
                    </div>
                    <img src="/img/bkadtaiming/pick1.png" style={{marginLeft: 20}}/>
                </div>
            );
        } else if(this.props.active === 7) {
            return (
                <div style={{
                    position: "absolute",
                    left: '56%',
                    height: '120px',
                    borderLeft: '1px solid #ffffff',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    zIndex: 5
                }}>
                    <div style={styleComp}>
                        <div className='new-line' style={{marginLeft: 10}}>2021</div>
                    </div>
                </div>
            );
        } else if(this.props.active === 8) {
            return (
                <div style={{
                    position: "absolute",
                    left: '66.5%',
                    height: '120px',
                    borderLeft: '1px solid #ffffff',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    zIndex: 5
                }}>
                    <div style={styleComp}>
                        <div className='new-line' style={{marginLeft: 10}}>2022</div>
                    </div>
                    <img src="/img/bkadtaiming/pick8.png" style={{marginLeft: 20}}/>
                </div>
            );
        } else if(this.props.active === 9) {
            return (
                <div style={{
                    position: "absolute",
                    left: '77%',
                    height: '120px',
                    borderLeft: '1px solid #ffffff',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    zIndex: 5
                }}>
                    <div style={styleComp}>
                        <div className='new-line' style={{marginLeft: 10}}>2023</div>
                    </div>
                    <img src="/img/bkadtaiming/pick9.png" style={{marginLeft: 20}}/>
                </div>
            );
        } else if(this.props.active === 10) {
            return (
                <div style={{
                    position: "absolute",
                    left: '88%',
                    height: '120px',
                    borderLeft: '1px solid #ffffff',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    zIndex: 5
                }}>
                    <div style={styleComp}>
                        <div className='new-line' style={{marginLeft: 10}}>2024</div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}
