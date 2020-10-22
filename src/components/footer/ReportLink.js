import React, { Component } from 'react';
import ReportLinkIcon from "./ReportLinkIcon";
import ReportLinkText from "./ReportLinkText";

export default class ReportLink extends Component {
    render() {
        let styleReportLink = {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
        }
        return (
            <div className='report-link' style={styleReportLink}>
                <ReportLinkIcon />
                <ReportLinkText />
            </div>
        );
    }
}
