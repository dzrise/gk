import React, { Component } from 'react';

export default class ButtonAll extends Component {
    render() {
        let styleButtonProjects = {
            position:'absolute',
            right: 50,
            bottom: 0,
            border: 'none',
            background: 'url(/img/bg-button.png)',
            backgroundRepeat: 'no-repeat',
            fontFamily: 'Roboto',
            fontSize: 12,
            color: '#ffffff',
            padding: '25px 40px 35px 30px',
            cursor: 'pointer',
        }
        return (
            <button style={styleButtonProjects}>
                Вся Россия
            </button>
        );
    }
}

