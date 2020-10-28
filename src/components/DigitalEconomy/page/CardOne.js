import React, { Component } from 'react';
export default class CardOne extends Component {
    render() {
        let styleCard = {
            color: '#ffffff',
            display: this.props.display
        }
        return (
            <div style={styleCard}>
                <div style={{display:'flex',justifyContent: 'flex-start', alignItems: 'flex-end',}}>
                    <div style={{fontFamily:'Supermolot Black', fontSize: 150}}>3</div>
                    <div style={{fontFamily:'Roboto Bold', fontSize: 20, lineHeight:1.5, marginLeft: 30, marginBottom:20}}>МЛРД.РУБ</div>
                </div>
                <div className='new-line' style={{fontFamily:'Roboto',fontSize: 20, lineHeight: 1.2}}>Инвестиции федерального</div>
                <div className='new-line' style={{fontFamily:'Roboto',fontSize: 20, lineHeight: 1.2}}>бюджета в уставный капитал</div>
                <div className='new-line' style={{fontFamily:'Roboto',fontSize: 20, lineHeight: 1.2}}>ГТЛК в 2019 г.</div>
                <div className='new-line' style={{fontFamily:'Roboto',fontSize: 20, lineHeight: 1.2, marginBottom:30}}>В рамках национальной программы</div>
                <div className='new-line' style={{fontFamily:'Roboto',fontSize: 12, lineHeight: 1.2}}>«Цифровая экономика Российской Федерации»</div>
                <div className='new-line' style={{fontFamily:'Roboto',fontSize: 12, lineHeight: 1.2}}>ГТЛК были выделены бюджетные средства в объеме</div>
                <div className='new-line' style={{fontFamily:'Roboto',fontSize: 12, lineHeight: 1.2}}>3 млрд руб. для развития льготного лизинга цифровых</div>
                <div className='new-line' style={{fontFamily:'Roboto',fontSize: 12, lineHeight: 1.2}}>активов</div>
            </div>
        );
    }
}
