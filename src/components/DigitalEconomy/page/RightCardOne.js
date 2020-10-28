import React, { Component } from 'react';
export default class RightCardOne extends Component {
    render() {
        let styleInt = {
            fontFamily: 'Roboto',
            fontSize: 25,
            color: '#ffffff'
        }
        return (
            <div style={styleInt}>
                <div className='new-line' style={{marginTop: 150}}>ЛК ОДНОЙ ИЗ ПЕРВЫХ КОМПАНИЙ</div>
                <div className='new-line'>ВЫДЕЛИЛА ЦИФРОВЫЕ АКТИВЫ</div>
                <div className='new-line'>В ОТДЕЛЬНОЕ НАПРАВЛЕНИЕ</div>
                <div className='new-line' style={{marginBottom: 100}}>РАЗВИТИЯ</div>
            </div>
        );
    }
}
