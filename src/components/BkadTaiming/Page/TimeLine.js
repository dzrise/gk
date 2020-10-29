import React, { Component } from 'react';
import ProgresLink from "./ProgresLink";
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
        let styleProgressBar = {
            position: 'absolute',
            width: '100%',
            height: '40px',
            zIndex: 3,
        }
        return (
            <div style={styleTimeLine}>
                <div style={styleTimeLineProgress}>
                    <div style={styleProgressBar}>
                        <div style={{display: 'flex', height: '100%'}}>
                            <div style={{width: '55%', height: '100%', display: 'flex', alignItems: 'center'}}>
                                <ProgresLink/>
                                <ProgresLink />
                                <ProgresLink />
                                <ProgresLink />
                                <ProgresLink />
                                <ProgresLink />
                            </div>
                            <div style={{width: '45%', display: 'flex', alignItems: 'center'}}>
                                <ProgresLink />
                                <ProgresLink />
                                <ProgresLink />
                                <ProgresLink />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
