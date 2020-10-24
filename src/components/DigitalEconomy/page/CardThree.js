import React, { Component } from 'react';
export default class CardThree extends Component {
    render() {
        let styleInt = {
            fontFamily: 'Supermolot Black',
            fontSize: 150,
            lineHeight: 1.2,
            color: '#ffffff'
        }
        let styleText = {
            fontFamily: 'Roboto',
            fontSize: 20,
            color: '#ffffff',
            lineHeight: 1.5,
        }
        return (
            <div>
                <div style={styleInt}>>10</div>
                <div style={styleText}>
                    <div className='new-line'>По внедрению «сквозных»</div>
                    <div className='new-line'>цифровых технологий</div>
                    <div className='new-line'>и платформенных решений</div>
                    <div className='new-line'>планируется реализовать</div>
                    <div className='new-line'>в 2020–2024 гг.</div>
                </div>
            </div>
        );
    }
}
