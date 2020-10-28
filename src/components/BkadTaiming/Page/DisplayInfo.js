import React, { Component } from 'react';
export default class DisplayInfo extends Component {
    render() {
        let styleComp= {
            marginTop: '50px',
            marginLeft: this.props.marginLeft,
            color: '#ffffff',
            fontFamily: 'Roboto',
            fontSize: 18,
            lineHeight: 1.5
        }
        return (
            <div style={styleComp}>
                {this.props.children}
            </div>
        );
    }
}
