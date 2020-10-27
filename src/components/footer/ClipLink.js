import React, { Component } from 'react';
import ClipLinkIcon from "./ClipLinkIcon";
import ClipLinkText from "./ClipLinkText";
import ModalVideo from "./ModalVideo";

export default class ClipLink extends Component {
    constructor () {
        super()
        this.state = {
            isOpen: false,
            icon: '/img/icon-video-inactive.png',
        }
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    openModal () {
        this.setState({icon: '/img/icon-video-active.png'})
        setTimeout(() => {
                this.setState({isOpen: true})
            },
            1000
        )

    }
    closeModal(){
        this.setState({icon: '/img/icon-video-inactive.png'})
        this.setState({isOpen: false})
    }
    render() {
        let styleClipLink = {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
        }
        return (
            <React.Fragment>
                <ModalVideo  isOpen={this.state.isOpen} url='/video.mp4' onClose={() => {this.closeModal()}} />
                <div className='clip-link' style={styleClipLink} onClick={this.openModal}>
                    <ClipLinkIcon icon={this.state.icon}/>
                    <ClipLinkText />
                </div>
            </React.Fragment>
        );
    }
}
