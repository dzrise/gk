import React, { Component } from 'react';
export default class RightCard extends Component {
    render() {
        let styleRightCard = {
            padding: '30px 0 0 50px',
            display: this.props.display
        }
        return (
            <div className='right-card' style={styleRightCard}>
                {this.props.children}
            </div>
        );
    }
}
