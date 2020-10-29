import React, { Component } from 'react';
export default class DigitalCard extends Component {
    render() {
        let styleDigitalCard = {
            position: 'absolute',
            left: this.props.left,
            width: '374px',
            height: '374px',
            background: 'linear-gradient(45deg, rgba(24,145,85,1) 0%, rgba(33,69,142,1) 100%)',
            boxShadow: '10px 10px 25px 0px rgba(0,0,0,0.75)',
            zIndex: this.props.zIndex,
            padding: '50px',
        }
        let styleIcon = {
            position: 'absolute',
            left: this.props.leftArrow,
            top: 20,
        }
        return (
            <div className='digital_card' style={styleDigitalCard} onClick={this.props.onClick}>
                <img style={styleIcon} src="/img/arrow-white-down.png"/>
                {this.props.children}
            </div>
        );
    }
}
