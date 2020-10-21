import React, { Component } from 'react';
import './footer/footer.css'
import Line from "./footer/Line";

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <Line/>
                <div className="footer_row">
                    <div className="row_left">
                        Государственная Транспортная Лизинговая Компания 2020—<span>2021</span>
                    </div>
                    <div className="row_right">

                    </div>
                </div>
            </footer>
        );
    }
}
