import React, { Component } from 'react';
import './footer/footer.css'
import Line from "./footer/Line";
import Copyright from "./footer/Copyright";
import ClipLink from "./footer/ClipLink";
import ReportLink from "./footer/ReportLink";

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <Line/>
                <div className="footer_row">
                    <div className="row_left">
                        <Copyright/>
                    </div>
                    <div className="row_right">
                        <div className="footer__video">
                            <ClipLink/>
                        </div>
                        <div className="footer__report">
                            <ReportLink/>
                        </div>
                        <div className="footer__site">
                                www.gtlk.ru
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
