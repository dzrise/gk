import React, { Component } from 'react';
export default class ProgresLink extends Component {
    render() {
        let styleComp= {
            padding: '10px',
            borderRadius: '16px',
            width: '20%'
        }
        return (
            <div style={styleComp}>
                <img src="/img/romb.png" />
            </div>
        );
    }
}
