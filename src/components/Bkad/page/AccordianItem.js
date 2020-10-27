import React, { Component } from 'react';
export default class AccordianItem extends Component {

    render() {
        let className  = 'slide ' + this.props.class;
        if (this.props.isActive) {
            className  += ' active'
        }
        let styleItem = {
            zIndex: this.props.zIndex
        }
        let styleArrow = {
            position: 'absolute',
            top: '5%',
            right: '10%',
        }
        return (
            <div className={className} onClick={this.props.onClickFunc} style={styleItem}>
                {this.props.children}
                <img src="/img/arrow-right.png" className='arrow' style={styleArrow}/>
            </div>
        );
    }
}
