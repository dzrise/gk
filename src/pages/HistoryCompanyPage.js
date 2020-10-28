import React, { Component } from 'react';
import Header from "../components/HistoryCompany/Header";
import TimelineItem from "../components/HistoryCompany/page/TimelineItem";
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
            padding: '125px 100px 0 100px',
            display: 'flex',

        }
        return (
            <>
                <div className="history-company" style={pageStyle}>
                    <Header/>
                    <div style={styleInner}>
                        <TimelineItem img="img/historyCompany/2001.png" top='33.041666667%' left='7.390644217%' marginTop='-50%' waitBeforeShow={500}>
                            <div className='new-line'>Создано</div>
                            <div className='new-line'>ЗАО «Лизинговая компания</div>
                            <div className='new-line' >гражданской авиации»</div>
                        </TimelineItem>
                        <TimelineItem img="img/historyCompany/2006.png" top='29.739583333%' left='25.109809663%' waitBeforeShow={1000}>

                        </TimelineItem>
                        <TimelineItem img="img/historyCompany/2009.png" top='50.880208333%' left='37.481698389%'  marginTop='-100%' waitBeforeShow={1500}>
                            <div className='new-line'><strong>ФЕВРАЛЬ.</strong> Минтрансу России переданы</div>
                            <div className='new-line'>полномочия по осуществлению прав</div>
                            <div className='new-line' style={{marginBottom: 20,}}>акционера ГТЛК</div>

                            <div className='new-line'><strong>ИЮНЬ.</strong> Запущена первая программа</div>
                            <div className='new-line'>лизинга с государственным участием</div>
                        </TimelineItem>
                        <TimelineItem img="img/historyCompany/2010.png" top='27.177083333%' left='54.831625183%' waitBeforeShow={2000}>

                        </TimelineItem>
                        <TimelineItem img="img/historyCompany/2011.png" top='34.817708333%' left='68.594436317%' waitBeforeShow={2500}>

                        </TimelineItem>
                        <TimelineItem img="img/historyCompany/2012.png" top='48.010416667%' left='81.039531479%' waitBeforeShow={3000}>

                        </TimelineItem>
                    </div>
                </div>
            </>
        );
    }
}
