import React, { Component } from 'react';
export default class DisplayInfo extends Component {
    render() {
        let styleComp= {
            color: '#ffffff',
            fontFamily: 'Roboto',
            fontSize: 18,
            lineHeight: 1.5,
        }
        if(this.props.active === 1 ){
            return (
                <div style={{marginTop: '50px',marginLeft: '3%'}} >
                    <div style={styleComp}>
                        <div className='new-line'>Правительством РФ утвержден</div>
                        <div className='new-line'>порядок отбора субъектов</div>
                        <div className='new-line'>Российской Федерации для</div>
                        <div className='new-line'>участия в обновлении парка</div>
                        <div className='new-line'>общественного транспорта в рамках БКАД</div>
                    </div>
                </div>
            );
        } else if(this.props.active === 2 ){
            return (
                <div style={{marginTop: '50px',marginLeft: '11%'}} >
                    <div style={styleComp}>
                        <div className='new-line'> Минтрансом России собраны заявки</div>
                        <div className='new-line'>от 53 субъектов Российской Федерации</div>
                        <div className='new-line'>(60 городов)  на приобретение пассажирских</div>
                        <div className='new-line'>транспортных средств на общую сумму</div>
                        <div className='new-line' style={{marginBottom: 30}}>54 млрд руб.</div>

                        <div className='new-line'>Отобраны 12 городских агломераций</div>
                        <div className='new-line'>для участия в мероприятии в 2020 г.</div>
                    </div>
                </div>
            );
        } else if(this.props.active === 3 ){
            return (
                <div style={{marginTop: '50px',marginLeft: '20%'}} >
                    <div style={styleComp}>
                        <div className='new-line'> Заключен первый договор</div>
                        <div className='new-line'> лизинга – на поставку автобусов</div>
                        <div className='new-line'> в Пермскую агломерацию.</div>

                    </div>
                </div>
            );
        } else if(this.props.active === 4 ){
            return (
                <div style={{marginTop: '50px',marginLeft: '29%'}} >
                    <div style={styleComp}>
                        <div className='new-line'>ГТЛК заключены опционы</div>
                        <div className='new-line'>с производителями на</div>
                        <div className='new-line'>приобретение транспортных</div>
                        <div className='new-line'>средств, в соответствии</div>
                        <div className='new-line'>с потребностью 12 городских</div>
                        <div className='new-line'>агломераций в 2020 г.</div>


                    </div>
                </div>
            );
        } else if(this.props.active === 5 ){
            return (
                <div style={{marginTop: '50px',marginLeft: '38.5%'}} >
                    <div style={styleComp}>
                        <div className='new-line'>Минтрансом России и ГТЛК заключено Соглашение</div>
                        <div className='new-line'> о предоставлении из федерального бюджета субсидии</div>
                        <div className='new-line'>ГТЛК на возмещение потерь при предоставлении</div>
                        <div className='new-line'>лизингополучателю скидки по договорам лизинга</div>
                        <div className='new-line'>пассажирского транспорта</div>
                    </div>
                </div>
            );
        } else if(this.props.active === 6 ){
            return (
                <div style={{marginTop: '50px',marginLeft: '47.5%'}} >
                    <div style={styleComp}>
                        <div className='new-line'>ГТЛК заключены все запланированные на 2020 г.</div>
                        <div className='new-line'>договоры лизинга на поставку 511 ед. пассажирского</div>
                        <div className='new-line' style={{marginBottom:30}}>транспорта в 12 городских агломераций</div>

                        <div className='new-line'>Объем инвестиций в производство пассажирского</div>
                        <div className='new-line' style={{marginBottom:30}}>транспорта составил 6,9 млрд руб.</div>

                        <div className='new-line'> На 25.09.2020 передано лизингополучателям 20% техники.</div>

                    </div>
                </div>
            );
        } else if(this.props.active === 7 ){
            return (
                <div style={{marginTop: '50px',marginLeft: '56%'}} >
                    <div style={styleComp}>
                        <div className='new-line'>Общий объем поставки техники</div>
                        <div className='new-line'>в лизинг в 2020-2024 гг. в рамках</div>
                        <div className='new-line'>БКАД на льготных условиях</div>
                        <div className='new-line'>составит ~2 100 ед. на общую</div>
                        <div className='new-line'>сумму более 33 млрд руб.</div>
                    </div>
                </div>
            );
        } else if(this.props.active === 8 ){
            return (
                <div style={{marginTop: '50px',marginLeft: '67.5%'}} >
                    <div style={styleComp}>
                        <div className='new-line'>В 15 городах России будут</div>
                        <div className='new-line'>внедрены интеллектуальные</div>
                        <div className='new-line'>транспортные системы с</div>
                        <div className='new-line'>автоматическим управлением</div>
                        <div className='new-line'>движением</div>
                    </div>
                </div>
            );
        } else if(this.props.active === 9 ){
            return (
                <div style={{marginTop: '50px',marginLeft: '77%'}} >
                    <div style={styleComp}>
                        <div className='new-line'>Появятся первые платные</div>
                        <div className='new-line'>дороги с безостановочной</div>
                        <div className='new-line'>системой оплаты «свободный</div>
                        <div className='new-line'>поток»</div>
                    </div>
                </div>
            );
        } else if(this.props.active === 10 ){
            return (
                <div style={{marginTop: '50px',marginLeft: '55%'}} >
                    <div style={styleComp}>
                        <div className='new-line'>Общий объем поставки техники</div>
                        <div className='new-line'>в лизинг в 2020-2024 гг. в рамках</div>
                        <div className='new-line'>БКАД на льготных условиях</div>
                        <div className='new-line'>составит ~2 100 ед. на общую</div>
                        <div className='new-line'>сумму более 33 млрд руб.</div>
                    </div>
                </div>
            );
        } else {
            return (
                <div style={{marginTop: '50px', marginLeft: '55%'}}>
                    <div style={styleComp}>
                        <div className='new-line'>Общий объем поставки техники</div>
                        <div className='new-line'>в лизинг в 2020-2024 гг. в рамках</div>
                        <div className='new-line'>БКАД на льготных условиях</div>
                        <div className='new-line'>составит ~2 100 ед. на общую</div>
                        <div className='new-line'>сумму более 33 млрд руб.</div>
                    </div>
                </div>
            );
        }
    }
}
