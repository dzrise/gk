import React, { Component } from 'react';

export default class ClipLinkText extends Component {
    render() {
        let styleClipLinkText = {
            fontFamily: 'Roboto',
            fontSize: '13px',
            color: '#e6e6e6',
            marginTop: '-10px',
            marginLeft: '-10px',
        }
        return (
           <>
               <span className='clip-link__text' style={styleClipLinkText}>
                   Презентационный ролик о компании
               </span>
           </>
        );
     }
}
