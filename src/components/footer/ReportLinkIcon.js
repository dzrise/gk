import React, { Component } from 'react';

export default class ReportLinkIcon extends Component {
    render() {
        let styleReportLinkIcon = {
            marginLeft: '20px',
        }
        return (
            <img src='/img/icon-report-inactive.png' alt='report link icon' className='report-link__icon' style={styleReportLinkIcon} />
        );
    }
}
