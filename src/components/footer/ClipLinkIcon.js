import React, { Component } from 'react';

export default class ClipLinkIcon extends Component {
    render() {
        let styleClipLinkIcon = {
            marginLeft: '20px',
        }
        return (
            <img src={this.props.icon} className='clip-link__icon' style={styleClipLinkIcon} />
        );
    }
}
