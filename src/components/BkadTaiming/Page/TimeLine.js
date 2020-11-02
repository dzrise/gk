import React, { Component } from 'react';
import ProgresLink from "./ProgresLink";
export default class TimeLine extends Component {
    constructor() {
        super();
        this.state = {
            progressWidth : '100%'
        }
        this.setProgress = this.setProgress.bind(this)

    }

    setProgress(id) {
        switch (id){
            case 1:
                this.state.progressWidth =  '100%'
                break;
            case 2:
                this.state.progressWidth =  '91%'
                break;
            case 3:
                this.state.progressWidth =  '82%'
                break;
            case 4:
                this.state.progressWidth =  '73%'
                break;
            case 5:
                this.state.progressWidth =  '64%'
                break;
            case 6:
                this.state.progressWidth =  '55%'
                break;
            case 7:
                this.state.progressWidth =  '45.5%'
                break;
            case 8:
                this.state.progressWidth =  '35%'
                break;
            case 9:
                this.state.progressWidth =  '24.5%'
                break;
            case 10:
                this.state.progressWidth =  '14%'
                break;
        }
    }

    render() {
        let styleTimeLine = {
            position: 'relative',
            width: '100%',
            height: '40px',
            borderRadius: 16,
            backgroundColor: '#e6e6e6',
            zIndex: 1,
        }
        let styleTimeLineProgress ={
            position: 'absolute',
            right: 0,
            width: this.state.progressWidth,
            height: '40px',
            borderRadius: 16,
            background: 'linear-gradient(90deg, rgba(24,146,85,1) 0%, rgba(33,69,142,1) 100%)',
            zIndex: 2,
        }
        let styleProgressBar = {
            position: 'absolute',
            width: '100%',
            height: '40px',
            zIndex: 3,
        }
        return (
            <div style={styleTimeLine}>
                <div style={styleTimeLineProgress}>
                </div>
                <div style={styleProgressBar}>
                    <div style={{display: 'flex', height: '100%'}}>
                            <div style={{width: '55%', height: '100%', display: 'flex', alignItems: 'center'}}>
                                <ProgresLink active={this.props.active === 1} id='1' onClick={()=>{this.props.activeThis(1); this.setProgress(1)}}/>
                                <ProgresLink active={this.props.active === 2} id='2' onClick={()=>{this.props.activeThis(2); this.setProgress(2)}}/>
                                <ProgresLink active={this.props.active === 3} id='3' onClick={()=>{this.props.activeThis(3); this.setProgress(3)}}/>
                                <ProgresLink active={this.props.active === 4} id='4' onClick={()=>{this.props.activeThis(4); this.setProgress(4)}}/>
                                <ProgresLink active={this.props.active === 5} id='5' onClick={()=>{this.props.activeThis(5); this.setProgress(5)}}/>
                                <ProgresLink active={this.props.active === 6} id='6' onClick={()=>{this.props.activeThis(6); this.setProgress(6)}}/>
                            </div>
                            <div style={{width: '45%', display: 'flex', alignItems: 'center'}}>
                                <ProgresLink active={this.props.active === 7} id='7' onClick={()=>{this.props.activeThis(7); this.setProgress(7)}}/>
                                <ProgresLink active={this.props.active === 8} id='8' onClick={()=>{this.props.activeThis(8); this.setProgress(8)}}/>
                                <ProgresLink active={this.props.active === 9} id='9' onClick={()=>{this.props.activeThis(9); this.setProgress(9)}}/>
                                <ProgresLink active={this.props.active === 10} id='10'onClick={()=>{this.props.activeThis(10); this.setProgress(10)}} />
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}
