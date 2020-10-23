import React, { Component } from 'react';

export default class Slogan extends Component {
    render() {
        let styleSlogan = {
            fontFamily: 'Supermolot',
            fontSize: 17,
            color: '#cfd1d2',
            float: 'right',
        }
        return (
            <div className='header__slogan' style={styleSlogan}>
                ДВИЖУЩАЯ СИЛА
            </div>
        );
    }
}
