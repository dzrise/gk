import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        let styleCard = {
            width: '50%',
            float: 'left',
            backgroundColor: '#fff',
            padding: '50px 100px 50px 50px',
            fontFamily: 'Roboto',
            fontSize: 20,
            lineHeight: 1.5,
        }
        let styleGreen = {
            color: '#169455',
        }
        let styleMargin = {
            marginBottom:'30px',
        }
        if(this.props.showCard === true) {
            return (
                <div className='card' style={styleCard}>
                    <p><strong>ГТЛК инструмент реализации государственных</strong></p>
                    <p><strong>задач и национальных проектов. Стратегиче-</strong></p>
                    <p><strong>ский актив государства и универсальный ин-</strong></p>
                    <p><strong>струмент реализации государственной полити-</strong></p>
                    <p><strong>ки и программ развития транспортной отрасли</strong></p>
                    <p style={styleMargin}><strong>Российской Федерации.</strong></p>

                    <p>ГТЛК принимает прямое участие в реализации мероприя</p>
                    <p>тий <span style={styleGreen}>3 национальных проектов и 8 программ с государствен-</span></p>
                    <p><span style={styleGreen}>ным софинансированием</span>. Деятельность ГТЛК способствует</p>
                    <p>решению важных государственных задач - обновлению</p>
                    <p>парков транспортных предприятий, развитию машиностро-</p>
                    <p>ения, импортозамещению и внедрению цифровых техноло-</p>
                    <p> гий и платформенных решений</p>
                </div>
            );
        } else {
            return null;
        }
    }
}
