import React, { Component } from 'react';
export default class RightCardThree extends Component {
    render() {
        let list = '/img/list.png'
        let styleTitle = {
            fontFamily: 'Roboto Bold',
            fontSize: 20,
            lineHeight: 1.5,
            color: '#ffffff',
            textAlign:'center',
            marginBottom: 50,
        }
        let styleList = {
            fontFamily: 'Roboto',
            fontSize: 16,
            lineHeight: 1.5,
            color: '#ffffff',
            marginBottom: 30,
            paddingLeft: 28,
            backgroundImage: 'url('+list+')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '5px 10px ',
        }
        let stylePart = {
            display: 'flex',
            justifyContent: 'flex-start',
            marginTop: 80
        }
        let stylePartImg = {
            marginLeft: 20,
        }
        return (
            <div>
                <h2 style={styleTitle}>АКТИВНЫЙ СТАРТ И ПРОАКТИВНАЯ РАБОТА</h2>
                <ul>
                    <li style={styleList}>ГТЛК выстраивает партнерские взаимоотношения {'\n'} с ключевыми IT-компаниями.</li>
                    <li style={styleList}>Подписаны соглашения о сотрудничестве с лидерами рынка {'\n'} в сфере интеграционных IT-решений и сервисов и информацион- {'\n'} ной безопасности</li>
                </ul>
                <div style={stylePart}>
                    <img src="/img/digital/logo1.png" alt=""/>
                    <img src="/img/digital/logo2.png" alt="" style={stylePartImg}/>
                    <img src="/img/digital/logo3.png" alt="" style={stylePartImg}/>
                </div>
            </div>
        );
    }
}
