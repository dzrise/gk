import React, { Component } from 'react';
export default class AccordianItem extends Component {

    render() {
        let className  = 'slide ' + this.props.class;
        if (this.props.isActive) {
            className  += ' active'
        }

        let styleArrow = {
            position: 'absolute',
            top: '5%',
            right: '10%',
        }
        return (
            <div className={className} onClick={this.props.onClickFunc}>
                {this.props.children}
                <img src="/img/arrow-right.png" className='arrow' style={styleArrow}/>
            </div>
        );
    }
}
