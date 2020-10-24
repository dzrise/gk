import React, { Component } from 'react';

export default class TitleDigital extends Component {
    render() {
        let styleTitle = {
            marginLeft: 30,
            display: 'block',
            float: 'left',
        }
        let styleTitleTop = {
            fontFamily: 'Roboto',
            fontSize:30,
            color: '#ffffff',
        }
        let styleTitleBottom = {
            fontFamily: 'Roboto Bold',
            fontSize:30,
            color: '#ffffff',
        }
        return (
            <div className='header__title' style={styleTitle}>
                <div className='title-top' style={styleTitleTop}>
                    Цифровая экономика
                </div>
                <div className='title-bottom' style={styleTitleBottom}>
                    Проекты в рамках Цифровой трансформации экономики России
                </div>
            </div>
        );
    }
}
