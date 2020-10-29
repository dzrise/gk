import React, { Component } from 'react';

export default class ButtonAll extends Component {
    render() {
        let styleButtonProjects = {
            position:'absolute',
            right: 50,
            bottom: 50,
            border: 'none',
            borderRadius: 16,
            background: 'linear-gradient(90deg, rgba(24,146,85,1) 0%, rgba(33,69,142,1) 100%)',
            fontFamily: 'Roboto',
            fontSize: 12,
            color: '#ffffff',
            padding: '15px 40px 15px 30px',
            cursor: 'pointer',
        }
        return (
            <button style={styleButtonProjects}>
                ГТЛК по всей России
            </button>
        );
    }
}

