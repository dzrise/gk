import React, { Component } from 'react';
import ClipLinkIcon from "./ClipLinkIcon";
import ClipLinkText from "./ClipLinkText";
import ModalVideo from "./ModalVideo";


export default class ClipLink extends Component {
    constructor () {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal () {
        this.setState({isOpen: true})
    }
    render() {
        let styleClipLink = {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
        }
        return (
            <React.Fragment>
                <ModalVideo  isOpen={this.state.isOpen} url='/video.mp4' onClose={() => this.setState({isOpen: false})} />
                <div className='clip-link' style={styleClipLink} onClick={this.openModal}>
                    <ClipLinkIcon />
                    <ClipLinkText />
                </div>
            </React.Fragment>
        );
    }
}
