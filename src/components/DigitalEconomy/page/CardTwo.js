import React, { Component } from 'react';
export default class CardTwo extends Component {
    render() {
        let styleCard = {
            color: '#ffffff',
            paddingRight: 50,
            display: this.props.display
        }
        return (
            <div style={styleCard}>
                <div style={{display:'flex',justifyContent: 'flex-start', alignItems: 'flex-end',}}>
                    <div style={{fontFamily:'Supermolot Black', fontSize: 150}}>9</div>
                    <div style={{fontFamily:'Roboto Bold', fontSize: 20, lineHeight:1.5, marginLeft: 30, marginBottom:20}}>МЛРД.РУБ</div>
                </div>
                <div className='new-line' style={{fontFamily:'Roboto',fontSize: 20, lineHeight: 1.2}}>Планируемый объем лизинговых</div>
                <div className='new-line' style={{fontFamily:'Roboto',fontSize: 20, lineHeight: 1.2}}>сделок на льготных условиях</div>
                <div className='new-line' style={{fontFamily:'Roboto',fontSize: 20, lineHeight: 1.2, marginBottom:30}}>в период 2020-2024 гг.</div>
                <div className='new-line' style={{fontFamily:'Roboto',fontSize: 12, lineHeight: 1.2}}>Общий объем некоммерческих лизинговых сделок,</div>
                <div className='new-line' style={{fontFamily:'Roboto',fontSize: 12, lineHeight: 1.2}}>которые планируется заключить до 2024 г., составит
                </div>
                <div className='new-line' style={{fontFamily:'Roboto',fontSize: 12, lineHeight: 1.2}}>почти 9 млрд руб. — финансирование будет произво-</div>
                <div className='new-line' style={{fontFamily:'Roboto',fontSize: 12, lineHeight: 1.2}}>диться за счет как бюджетных, так и внебюджетных</div>
                <div className='new-line' style={{fontFamily:'Roboto',fontSize: 12, lineHeight: 1.2}}>источников</div>
            </div>
        );
    }
}
