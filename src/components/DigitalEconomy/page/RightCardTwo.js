import React, { Component } from 'react';
export default class RightCardTwo extends Component {
    render() {
        let list = '/img/list.png'
        let styleCard = {

        }
        let styleTitle = {
            fontFamily: 'Roboto Bold',
            fontSize: 20,
            lineHeight: 1.5,
            color: '#ffffff',
            textAlign:'left',
            marginBottom: 20,
        }
        let styleList = {
            fontFamily: 'Roboto',
            fontSize: 16,
            lineHeight: 1.5,
            color: '#ffffff',
            marginBottom: 20,
            paddingLeft: 28,
            backgroundImage: 'url('+list+')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '5px 10px ',
        }
        return (
            <div style={styleCard}>
                <h2 style={styleTitle}>
                    <div className='new-line'>НАЦИОНАЛЬНАЯ ПРОГРАММА</div>
                    <div className='new-line'>«ЦИФРОВАЯ экономика Российской Федерации»</div></h2>
                <ul>
                    <li style={styleList}>ГТЛК планирует выполнять институциональную роль в реализации национальной программы: организовывать работу по отбору и подготовке проектов, представляющих интерес как для Компании, так и для транспортной отрасли в целом</li>
                    <li style={styleList}>ГТЛК призвана стимулировать инновационное развитие компаний, выступая в качестве инструмента для реализации программ инновационного развития.</li>
                    <li style={styleList}>ГТЛК готова рассматривать как классический лизинг, так и проекты с прямым финансированием (в том числе, предполагающие концессию)</li>
                </ul>
            </div>
        );
    }
}
