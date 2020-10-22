import React, { Component } from 'react';

export default class ReportLinkText extends Component {
    render() {
        let styleReportLinkText = {
            fontFamily: 'Roboto',
            fontSize: '13px',
            color: '#e6e6e6',
            marginTop: '-12px',
            marginLeft: '-10px',
        }
        return (
           <>
               <div className='report-link__text' style={styleReportLinkText}>
                  <div className='new-line'>Интерактивынй</div>
                   <div className='new-line'>годовой отчет за 2019 год</div>
               </div>
           </>
        );
     }
}
