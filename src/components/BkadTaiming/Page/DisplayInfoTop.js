import React, { Component } from 'react';
export default class DisplayInfoTop extends Component {
    render() {
        let styleComp= {
            position: 'absolute',
            marginLeft: this.props.marginLeft,
            color: '#ffffff',
            fontFamily: 'Roboto',
            fontSize: 18,
            lineHeight: 1.5,
            zIndex: 3,
        }
        return (
            <div style={styleComp}>
                {this.props.children}
            </div>
        );
    }
}
