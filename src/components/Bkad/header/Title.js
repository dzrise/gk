import React, { Component } from 'react';

export default class Title extends Component {
    render() {
        let styleTitle = {
            marginLeft: 30,
            display: 'block',
            float: 'left',
        }
        let styleTitleTop = {
            fontFamily: 'Roboto',
            fontSize:30,
            color: '#4d4d4f',
        }
        return (
            <div className='header__title' style={styleTitle}>
                <div className='title-top' style={styleTitleTop}>
                    Безопасность и качество автомобильных дорог
                </div>
            </div>
        );
    }
}
