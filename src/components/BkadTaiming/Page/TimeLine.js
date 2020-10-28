import React, { Component } from 'react';
export default class TimeLine extends Component {
    render() {
        let styleTimeLine = {
            position: 'relative',
            width: '100%',
            height: '40px',
            borderRadius: 16,
            backgroundColor: '#e6e6e6',
            zIndex: 1,
        }
        let styleTimeLineProgress ={
            position: 'absolute',
            width: '100%',
            height: '40px',
            borderRadius: 16,
            background: 'linear-gradient(90deg, rgba(24,146,85,1) 0%, rgba(33,69,142,1) 100%)',
            zIndex: 2,
        }
        return (
            <div style={styleTimeLine}>
                <div style={styleTimeLineProgress}>
                </div>
            </div>
        );
    }
}
