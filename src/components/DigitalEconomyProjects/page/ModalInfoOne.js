import React, { Component } from 'react';
import close from "../../../assets/img/close-white.png";

export default class ModalInfoOne extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();

    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, false);
    }


    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, false);
    }


    handleClickOutside(e) {
       console.log(e)
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
                <div ref={this.myRef} style={pageStyle}>
                    {this.props.children}
                </div>
            );
        } else {
            return null;
        }
    }
}
