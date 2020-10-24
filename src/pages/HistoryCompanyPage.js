import React, { Component } from 'react';
import Header from "../components/HistoryCompany/Header";
export default class HistoryCompanyPage extends Component {

    render() {
        let pageStyle = {
            position: 'relative',
            height: '100%',
            backgroundImage: 'url(/img/fon-history-company.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom center',
            backgroundSize: '100% 100%',
        }
        let styleInner = {
            padding: '125px 50px 0 50px',
            display: 'flex',
        }

        return (
            <>
                <div className="history-company" style={pageStyle}>
                    <Header/>
                </div>
            </>
        );
    }
}
