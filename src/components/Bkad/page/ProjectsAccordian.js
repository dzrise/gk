import React, { Component } from 'react';
import './accordian.css'
import AccordianItem from "./AccordianItem";
export default class ProjectsAccordian extends Component {
    constructor(props) {
        super(props);
        this.state = {active: 0};
    }
    handleClick(n) {    this.setState(state => ({      active: n    }));  }
    render() {
        let styleCard = {
            width: '50%',
            height: '70vh',
            float: 'left',
            fontFamily: 'Roboto',
            fontSize: 20,
            lineHeight: 1.5,
        }
        return (
            <div style={styleCard}>
                <div className="accordian">
                    <AccordianItem class="slide-one" isActive={this.state.active === 0}  onClickFunc={() =>this.handleClick(0)}>
                        <div className='title' onClick={() =>this.handleClick(0)}></div>
                        <div className="texto">
                           <p style={{fontFamily: 'Roboto', fontSize: 18, color: '#ffffff'}}>
                               Объединения усилий,
                               ресурсов и компетенций
                               для развития городского
                               пассадирского транспорта
                           </p>
                        </div>
                    </AccordianItem>
                    <AccordianItem class="slide-two" isActive={this.state.active === 1} onClickFunc={() =>this.handleClick(1)}>
                        <div className='title'>ГОСПОДДЕРЖКА</div>
                        <div className="texto">
                            <p style={{fontFamily: 'Roboto', fontSize: 18, color: '#4d4d4f',marginBottom:30}}><strong>ГОСПОДДЕРЖКА</strong></p>

                            <p style={{fontFamily: 'Roboto', fontSize: 18, color: '#4d4d4f'}}> ГТЛК принимает участие в реализации мероприятия национального проекта по обновле-
                                нию подвижного состава наземного общественного пассажирского транспорта не менее чем
                                в 20 городских агломерациях.
                            </p>
                        </div>
                    </AccordianItem>
                    <AccordianItem class="slide-three" isActive={this.state.active === 2}  onClickFunc={() =>this.handleClick(2)}>
                        <div className='title'>ЛЬГОТНЫЙ ЛИЗИНГ{'\n'}ТРАНСПОРТА</div>
                        <div className="texto">
                            <p style={{fontFamily: 'Roboto', fontSize: 18, color: '#4d4d4f',marginBottom:30}}><strong>ЛЬГОТНЫЙ ЛИЗИНГ {'\n'}ТРАНСПОРТА</strong></p>

                            <p style={{fontFamily: 'Roboto', fontSize: 18, color: '#4d4d4f'}}> ГТЛК принимает участие в реализации мероприятия национального
                                проекта по обновлению подвижного
                                состава наземного общественного
                                пассажирского транспорта не менее
                                чем в 20 городских агломерациях.
                            </p>
                        </div>
                    </AccordianItem>
                    <AccordianItem class="slide-four" isActive={this.state.active === 3}  onClickFunc={() =>this.handleClick(3)}>
                        <div className='title'>БАНКОВСКОЕ ФИНАНСИРОВАНИЕ</div>
                        <div className="texto">
                            <p style={{fontFamily: 'Roboto', fontSize: 18, color: '#4d4d4f',marginBottom:30}}><strong>БАНКОВСКОЕ ФИНАНСИРОВАНИЕ</strong></p>

                            <p style={{fontFamily: 'Roboto', fontSize: 18, color: '#4d4d4f'}}> ГТЛК принимает участие в реализации мероприятия национального
                                проекта по обновлению подвижного
                                состава наземного общественного
                                пассажирского транспорта не менее
                                чем в 20 городских агломерациях.
                            </p>
                        </div>
                    </AccordianItem>
                </div>
            </div>
        );
    }
}
