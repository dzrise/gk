import React, { Component } from 'react';
export default class AccordianItem extends Component {


    render() {
        let itemWidth  = '';
        if(this.props.class === 'slide-one'){
            if(this.props.isActive){
                itemWidth = '53%';
            } else {
                itemWidth='5%';
            }
        } else {
            if (this.props.isActive) {
                itemWidth = '62%';
            } else {
                itemWidth = '14%';

            }
        }
        let className  = 'slide ' + this.props.class;
        if (this.props.isActive) {
            className  += ' active'
        }
        let styleItem = {
            zIndex: this.props.zIndex,
            width:  itemWidth,
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
