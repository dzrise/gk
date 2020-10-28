import React, { Component } from 'react';
import {
    Player,
    ControlBar,
    PlayToggle
} from 'video-react';
import close from '../../assets/img/close.png';

export default class ModalVideo extends Component {
    render () {
        let styleModalVideo ={
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
            background: '#414142',
        }
        let styleModalVideoClose = {
            position: 'fixed',
            top: '50px',
            right: '50px',
            zIndex: 10000,
        }
        if(this.props.isOpen) {
            return (
                <div style={styleModalVideo}>
                    <img src={close} alt="close video" onClick={this.props.onClose} style={styleModalVideoClose}/>
                    <Player autoPlay>
                        <source src={this.props.url} />
                        <ControlBar autoHide={false} disableDefaultControls={true}>
                            <PlayToggle />
                        </ControlBar>
                    </Player>
                </div>
            )
        } else {
            return null;
        }
    }
}
