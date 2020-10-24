import React, { Component } from 'react';

export default class HomeMenuLink extends Component {
    render() {
        let styleHomeMenuLink = {
            position: 'absolute',
            top: this.props.top,
            left: this.props.left,
            width: 221,
            height: 213,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
            fontFamily: 'Roboto',
            fontSize: 18

        }
        return (
                <div className={this.props.class} style={styleHomeMenuLink}>
                    <div className='home-menu__link__inner' >
                        <div className='new-line'>{this.props.linkTextFirst}</div>
                        <div className='new-line'>{this.props.LinkTextSecond}</div>
                    </div>
                </div>
        );
    }
}
