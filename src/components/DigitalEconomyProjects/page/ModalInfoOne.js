import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class ModalInfoOne extends Component {
    constructor(props) {
        super(props);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {

        }
    }

    render() {
        let pageStyle = {
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            bottom: 0,
            width: 300,
            height: 400,
            marginTop: '-150px',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: 'rgba(234,237, 235,0.9)',
            backgroundImage: 'url('+this.props.backImg+')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom center',
            backgroundSize: 'contain',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
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
                <div ref={this.setWrapperRef} style={{width: '100%', height: '100%',zIndex: 8990,}} onClick={()=>{this.props.closeModal()}}>
                    <div style={pageStyle}>
                        {this.props.children}
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

ModalInfoOne.propTypes = {
    children: PropTypes.element.isRequired,
};
