import React, { Component } from 'react';
export default class ProgresLink extends Component {
    render() {
        let styleComp= {
            padding: '10px',
            borderRadius: '16px',
            width: '20%',
            zIndex: 10,
        }
        return (
            <div style={styleComp} >
                <div className={this.props.active ? 'progress-link active' : 'progress-link'} onClick={this.props.onClick}>
                    <img src="/img/romb.png" />
                </div>
            </div>
        );
    }
}
