import React, { Component } from 'react';
export default class ProgresLink extends Component {
    render() {
        let styleComp= {
            padding: '10px',
            borderRadius: '16px',
            marginLeft: this.props.marginLeft
        }
        return (
            <div style={styleComp}>
                <img src="/img/romb.png" />
            </div>
        );
    }
}
