import React, { Component } from 'react';

export default class ClipLinkIcon extends Component {
    render() {
        let styleClipLinkIcon = {
            marginLeft: '20px',
        }
        return (
            <img src='/img/icon-video-inactive.png' className='clip-link__icon' style={styleClipLinkIcon} />
        );
    }
}
