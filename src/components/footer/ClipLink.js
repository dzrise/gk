import React, { Component } from 'react';
import ClipLinkIcon from "./ClipLinkIcon";
import ClipLinkText from "./ClipLinkText";

export default class ClipLink extends Component {
    render() {
        let styleClipLink = {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
        }
        return (
            <div className='clip-link' style={styleClipLink}>
                <ClipLinkIcon />
                <ClipLinkText />
            </div>
        );
    }
}
