import React, { Component } from 'react';
export default class NewYers extends Component {
    render() {
        return (
                <div style={{width: "20%", padding: 10,  height: '100%', fontFamily: 'Roboto',color: '#666666', marginLeft: this.props.marginLeft,}}>
                    <div style={{width: '100%',height: '100%', padding: 12,borderLeft: '1px solid #666666', display: this.props.display}}>{this.props.children}</div>
                </div>
        );
    }
}
