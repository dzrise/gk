import React, { Component } from 'react';

export default class ClipLinkText extends Component {
    render() {
        let styleClipLinkText = {
            fontFamily: 'Roboto',
            fontSize: '13px',
            color: '#e6e6e6',
            marginTop: '-12px',
            marginLeft: '-10px',
        }
        return (
           <>
               <div className='clip-link__text' style={styleClipLinkText}>
                   <div className='new-line'>Презентационный</div>
                   <div className='new-line'>ролик о компании</div>
               </div>
           </>
        );
     }
}
