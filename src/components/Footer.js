import React, { Component } from 'react';
import './footer/footer.css'
import Line from "./footer/Line";
import Copyright from "./footer/Copyright";

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
                        <div className="footer_row">
                            <div className="col">

                            </div>
                            <div className="col">

                            </div>
                            <div className="col footer_site">
                                www.gtlk.ru
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
