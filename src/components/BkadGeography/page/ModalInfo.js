import React, { Component } from 'react';
import close from "../../../assets/img/close-white.png";

export default class ModalInfo extends Component {
    render() {
        let pageStyle = {
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            bottom: 0,
            width: 750,
            height: 300,
            marginTop: '-150px',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: 'rgba(59, 59, 59,0.6)',
            borderRadius: 16,
            padding: 30,
            zIndex: 9000,
        }
        let styleButton = {
            position: 'absolute',
            top: 15,
            right: 15,
            color: '#B3B3B3',
            fontSize: 30,
            fontFamily: 'Arial'
        }
        if(this.props.isOpen) {
            return (
                <div style={pageStyle}>
                    <img src={close} alt="close video" onClick={this.props.closeModal} style={styleButton}/>
                    {this.props.children}
                </div>
            );
        } else {
            return null;
        }
    }
}
