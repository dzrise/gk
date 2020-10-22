import React, { Component } from 'react';

export default class Line extends Component {
    render() {
        let styleLine = {
            backgroundImage: 'url(/img/footer-line.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
        }

        return (
            <div className='footer_line' style={styleLine}>
            </div>
        );
    }
}
