import React, { Component } from 'react';
export default class DigitalCard extends Component {
    render() {
        let styleDigitalCard = {
            position: 'absolute',
            left: this.props.left,
            width: '424px',
            height: '424px',
            backgroundImage: 'url(/img/bg-digital-card.png)',
            backgroundRepeat: 'no-repeat',
            zIndex: this.props.zIndex,
            padding: '50px 100px 50px 100px',
        }
        return (
            <div className='digital_card' style={styleDigitalCard}>
                {this.props.children}
            </div>
        );
    }
}
