import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SVG from 'react-inlinesvg';
import ModalInfo from "./ModalInfo";
import ButtonAll from "./ButtonAll";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: '',
        }
        this.closeModal = this.closeModal.bind(this)
        this.handleClickMap = this.handleClickMap.bind(this);
    }


    сomponentWillUnmount() {
        document.removeEventListener('click', this.handleClickMap, false);
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickMap, false);
        let regs = ['reg1','reg2','reg3','reg4','reg5','reg6','reg7','reg8','reg9','reg10','reg11','reg12']
        function regsActivate(i){
            setTimeout(function(){
                let id = regs[i]
                let elem = document.getElementById(id)
                elem.setAttribute('data-reg', id)
                elem.setAttribute('fill-opacity', '1')
                elem.setAttribute('fill', 'url(#grad2)')
            }.bind(this),i * 1000)
        }
        setTimeout(function() {
            for (let i = 0;i<regs.length;i++ ){
                regsActivate(i)
            }
        }.bind(this),1500)
    }

    handleClickMap(e) {
        let regs = ['reg1','reg2','reg3','reg4','reg5','reg6','reg7','reg8','reg9','reg10','reg11','reg12']
        if( regs.indexOf(  e.target.id ) != -1) {
            e.target.setAttribute('fill', 'url(#grad3)')
            e.target.setAttribute('fill-opacity', '1')
            this.setState({modalIsOpen: e.target.id})
        }
    }

    closeModal(id){
        this.setState({modalIsOpen:''})
        let elem = document.getElementById(id)
        elem.setAttribute('fill', 'url(#grad2)')
    }
    render() {
        let styleSvg = {
            width: '80%',
            maxHeight: '85.5vh',
            display: 'block',
            margin: '0 auto',
        }
        let styleModalTitle = {
            fontFamily: 'Roboto',
            fontSize: 23,
            color: '#ffffff',
        }
        let styleFlexOne = {
            display: 'flex',
            justifyContent: 'flex-start',
            marginTop: 30,
            marginBottom: 30,
            fontFamily: 'Roboto',
            fontSize: 24,
            color: '#ffffff',
            lineHeight: 1.2,

        }
        let styleFlexTwo = {
            display: 'flex',
            justifyContent: 'flex-between',
            alignItems: 'center',
            fontFamily: 'Roboto',
            color: '#ffffff',
            lineHeight: 1.2,
        }
        let styleBig = {
            fontFamily: 'Supermolot black',
            fontSize: 95,
            color: '#cccccc',
        }
        let styleButton = {
            position: 'absolute',
            top: 15,
            right: 15,
            color: '#e7e7e7',
            fontSize: 30,
            fontFamily: 'Arial'
        }
        return (
            <div className='map'>
                <SVG src='/img/map.svg' style={styleSvg}/>
                <ModalInfo isOpen={this.state.modalIsOpen === 'reg1'} closeModal={() => {this.closeModal('reg1')}}>
                    <h2 style={styleModalTitle}><strong>Белгород</strong>, ООО «Единая Транспортная Компания» </h2>
                    <div style={styleFlexOne}>
                        <img src="/img/bkadGeography/modal1.png" />
                        <div style={{marginLeft: 30}}>
                            <div className='new-line'><strong>Aвтобусы</strong></div>
                            <div className='new-line'>ЛИАЗ 529267</div>
                        </div>

                    </div>
                    <div style={styleFlexTwo}>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>58</div>
                            <div style={{fontSize:12}}>Заключены
                                договоры
                                на поставку
                                техники, ед</div>
                        </div>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>699</div>
                            <div style={{fontSize:12}}>Объем
                                инвестиций
                                (стоимость
                                техники),
                                млн руб.</div>
                        </div>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>58</div>
                            <div style={{fontSize:12}}>Передано
                                техники
                                в единицах</div>
                        </div>
                    </div>
                </ModalInfo>
                <ModalInfo isOpen={this.state.modalIsOpen === 'reg2'} closeModal={() => {this.closeModal('reg2')}}>
                    <h2 style={styleModalTitle}><strong>Воронеж</strong>, МКП «Воронежпассажиртранс»  </h2>
                    <div style={styleFlexOne}>
                        <img src="/img/bkadGeography/modal1.png" />
                        <div style={{marginLeft: 30}}>
                            <div className='new-line'><strong>Aвтобусы</strong></div>
                            <div className='new-line'>ЛИАЗ 529267</div>
                        </div>

                    </div>
                    <div style={styleFlexTwo}>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>62</div>
                            <div style={{fontSize:12}}>Заключены
                                договоры
                                на поставку
                                техники, ед</div>
                        </div>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>750</div>
                            <div style={{fontSize:12}}>Объем
                                инвестиций
                                (стоимость
                                техники),
                                млн руб.</div>
                        </div>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>00</div>
                            <div style={{fontSize:12}}>Передано
                                техники
                                в единицах</div>
                        </div>
                    </div>
                </ModalInfo>
                <ModalInfo isOpen={this.state.modalIsOpen === 'reg3'} closeModal={() => {this.closeModal('reg3')}}>
                    <h2 style={styleModalTitle}><strong>Екатеренбург</strong>, ЕМУП «Гортранс»    </h2>
                    <div style={styleFlexOne}>
                        <img src="/img/bkadGeography/modal3.png" />
                        <div style={{marginLeft: 30}}>
                            <div className='new-line'><strong>Aвтобусы</strong></div>
                            <div className='new-line'>НЕФАЗ 5299-0000040-57  </div>
                        </div>

                    </div>
                    <div style={styleFlexTwo}>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>57</div>
                            <div style={{fontSize:12}}>Заключены
                                договоры
                                на поставку
                                техники, ед</div>
                        </div>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>792</div>
                            <div style={{fontSize:12}}>Объем
                                инвестиций
                                (стоимость
                                техники),
                                млн руб.</div>
                        </div>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>00</div>
                            <div style={{fontSize:12}}>Передано
                                техники
                                в единицах</div>
                        </div>
                    </div>
                </ModalInfo>
                <ModalInfo isOpen={this.state.modalIsOpen === 'reg4'} closeModal={() => {this.closeModal('reg4')}}>
                    <h2 style={styleModalTitle}><strong>Иваново</strong>,МУП «ИПТ» </h2>
                    <div style={styleFlexOne}>
                        <img src="/img/bkadGeography/modal4.png" />
                        <div style={{marginLeft: 30}}>
                            <div className='new-line'><strong>Aвтобусы</strong></div>
                            <div className='new-line'>модели 6281.00 Адмирал </div>
                        </div>

                    </div>
                    <div style={styleFlexTwo}>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>31</div>
                            <div style={{fontSize:12}}>Заключены
                                договоры
                                на поставку
                                техники, ед</div>
                        </div>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>369</div>
                            <div style={{fontSize:12}}>Объем
                                инвестиций
                                (стоимость
                                техники),
                                млн руб.</div>
                        </div>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>05</div>
                            <div style={{fontSize:12}}>Передано
                                техники
                                в единицах</div>
                        </div>
                    </div>
                </ModalInfo>
                <ModalInfo isOpen={this.state.modalIsOpen === 'reg5'} closeModal={() => {this.closeModal('reg5')}}>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        centeredSlides={true}
                        loop={true}
                    >
                        <SwiperSlide>
                            <h2 style={styleModalTitle}><strong>Казань</strong>, МУП «Пассажирское автотранспортное предприятие №2»  </h2>
                            <div style={styleFlexOne}>
                                <img src="/img/bkadGeography/modal5.png" />
                                <div style={{marginLeft: 30}}>
                                    <div className='new-line'><strong>Aвтобусы</strong></div>
                                    <div className='new-line'>НЕФАЗ 5299-0000040-57 </div>
                                </div>

                            </div>
                            <div style={styleFlexTwo}>
                                <div style={styleFlexTwo}>
                                    <div style={styleBig}>30</div>
                                    <div style={{fontSize:12}}>Заключены
                                        договоры
                                        на поставку
                                        техники, ед</div>
                                </div>
                                <div style={styleFlexTwo}>
                                    <div style={styleBig}>374</div>
                                    <div style={{fontSize:12}}>Объем
                                        инвестиций
                                        (стоимость
                                        техники),
                                        млн руб.</div>
                                </div>
                                <div style={styleFlexTwo}>
                                    <div style={styleBig}>00</div>
                                    <div style={{fontSize:12}}>Передано
                                        техники
                                        в единицах</div>
                                </div>
                            </div>
                       </SwiperSlide>
                        <SwiperSlide>
                            <h2 style={styleModalTitle}><strong>Казань</strong>, МУП «Пассажирское автотранспортное предприятие №4»  </h2>
                            <div style={styleFlexOne}>
                                <img src="/img/bkadGeography/modal5.png" />
                                <div style={{marginLeft: 30}}>
                                    <div className='new-line'><strong>Aвтобусы</strong></div>
                                    <div className='new-line'>НЕФАЗ 5299-0000040-57 </div>
                                </div>

                            </div>
                            <div style={styleFlexTwo}>
                                <div style={styleFlexTwo}>
                                    <div style={styleBig}>23</div>
                                    <div style={{fontSize:12}}>Заключены
                                        договоры
                                        на поставку
                                        техники, ед</div>
                                </div>
                                <div style={styleFlexTwo}>
                                    <div style={styleBig}>276</div>
                                    <div style={{fontSize:12}}>Объем
                                        инвестиций
                                        (стоимость
                                        техники),
                                        млн руб.</div>
                                </div>
                                <div style={styleFlexTwo}>
                                    <div style={styleBig}>00</div>
                                    <div style={{fontSize:12}}>Передано
                                        техники
                                        в единицах</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </ModalInfo>
                <ModalInfo isOpen={this.state.modalIsOpen === 'reg6'} closeModal={() => {this.closeModal('reg6')}}>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        centeredSlides={true}
                        loop={true}
                    >
                        <SwiperSlide>
                            <h2 style={styleModalTitle}><strong>Кемерово</strong>, АО «Кемеровская транспортная компания»   </h2>
                            <div style={styleFlexOne}>
                                <img src="/img/bkadGeography/modal5.png" />
                                <div style={{marginLeft: 30}}>
                                    <div className='new-line'><strong>Aвтобусы</strong></div>
                                    <div className='new-line'>НЕФАЗ 5299-0000040-57 </div>
                                </div>

                            </div>
                            <div style={styleFlexTwo}>
                                <div style={styleFlexTwo}>
                                    <div style={styleBig}>10</div>
                                    <div style={{fontSize:12}}>Заключены
                                        договоры
                                        на поставку
                                        техники, ед</div>
                                </div>
                                <div style={styleFlexTwo}>
                                    <div style={styleBig}>127</div>
                                    <div style={{fontSize:12}}>Объем
                                        инвестиций
                                        (стоимость
                                        техники),
                                        млн руб.</div>
                                </div>
                                <div style={styleFlexTwo}>
                                    <div style={styleBig}>00</div>
                                    <div style={{fontSize:12}}>Передано
                                        техники
                                        в единицах</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h2 style={styleModalTitle}><strong>Кемерово</strong>, АО «Кемеровская транспортная компания»   </h2>
                            <div style={styleFlexOne}>
                                <img src="/img/bkadGeography/modal5.png" />
                                <div style={{marginLeft: 30}}>
                                    <div className='new-line'><strong>Aвтобусы</strong></div>
                                    <div className='new-line'>НЕФАЗ 5299-0000040-57 </div>
                                </div>

                            </div>
                            <div style={styleFlexTwo}>
                                <div style={styleFlexTwo}>
                                    <div style={styleBig}>15</div>
                                    <div style={{fontSize:12}}>Заключены
                                        договоры
                                        на поставку
                                        техники, ед</div>
                                </div>
                                <div style={styleFlexTwo}>
                                    <div style={styleBig}>190</div>
                                    <div style={{fontSize:12}}>Объем
                                        инвестиций
                                        (стоимость
                                        техники),
                                        млн руб.</div>
                                </div>
                                <div style={styleFlexTwo}>
                                    <div style={styleBig}>00</div>
                                    <div style={{fontSize:12}}>Передано
                                        техники
                                        в единицах</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </ModalInfo>
                <ModalInfo isOpen={this.state.modalIsOpen === 'reg7'} closeModal={() => {this.closeModal('reg7')}}>
                    <h2 style={styleModalTitle}><strong>Липецк</strong>, МУП «Липецкпассажиртранс»  </h2>
                    <div style={styleFlexOne}>
                        <img src="/img/bkadGeography/modal1.png" />
                        <div style={{marginLeft: 30}}>
                            <div className='new-line'><strong>Aвтобусы</strong></div>
                            <div className='new-line'>ЛИАЗ 529267</div>
                        </div>

                    </div>
                    <div style={styleFlexTwo}>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>32</div>
                            <div style={{fontSize:12}}>Заключены
                                договоры
                                на поставку
                                техники, ед</div>
                        </div>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>384</div>
                            <div style={{fontSize:12}}>Объем
                                инвестиций
                                (стоимость
                                техники),
                                млн руб.</div>
                        </div>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>58</div>
                            <div style={{fontSize:12}}>Передано
                                техники
                                в единицах</div>
                        </div>
                    </div>
                </ModalInfo>
                <ModalInfo isOpen={this.state.modalIsOpen === 'reg8'} closeModal={() => {this.closeModal('reg8')}}>
                    <h2 style={styleModalTitle}><strong>Нижний Новгород</strong>, МУП «Нижегородпассажиравтотранс»  </h2>
                    <div style={styleFlexOne}>
                        <img src="/img/bkadGeography/modal1.png" />
                        <div style={{marginLeft: 30}}>
                            <div className='new-line'><strong>Aвтобусы</strong></div>
                            <div className='new-line'>ЛИАЗ 529267</div>
                        </div>

                    </div>
                    <div style={styleFlexTwo}>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>51</div>
                            <div style={{fontSize:12}}>Заключены
                                договоры
                                на поставку
                                техники, ед</div>
                        </div>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>612</div>
                            <div style={{fontSize:12}}>Объем
                                инвестиций
                                (стоимость
                                техники),
                                млн руб.</div>
                        </div>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>00</div>
                            <div style={{fontSize:12}}>Передано
                                техники
                                в единицах</div>
                        </div>
                    </div>
                </ModalInfo>
                <ModalInfo isOpen={this.state.modalIsOpen === 'reg9'} closeModal={() => {this.closeModal('reg9')}}>
                    <h2 style={styleModalTitle}><strong>Омск</strong>, МП Электрический транспорт     </h2>
                    <div style={styleFlexOne}>
                        <img src="/img/bkadGeography/modal1.png" />
                        <div style={{marginLeft: 30}}>
                            <div className='new-line'><strong>Троллейбус </strong></div>
                            <div className='new-line'>модели 6281.00 Адмирал</div>
                        </div>

                    </div>
                    <div style={styleFlexTwo}>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>33</div>
                            <div style={{fontSize:12}}>Заключены
                                договоры
                                на поставку
                                техники, ед</div>
                        </div>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>679</div>
                            <div style={{fontSize:12}}>Объем
                                инвестиций
                                (стоимость
                                техники),
                                млн руб.</div>
                        </div>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>00</div>
                            <div style={{fontSize:12}}>Передано
                                техники
                                в единицах</div>
                        </div>
                    </div>
                </ModalInfo>
                <ModalInfo isOpen={this.state.modalIsOpen === 'reg10'} closeModal={() => {this.closeModal('reg10')}}>
                    <h2 style={styleModalTitle}><strong>Пермь</strong>, ООО «РТ Лайн»  </h2>
                    <div style={styleFlexOne}>
                        <img src="/img/bkadGeography/modal1.png" />
                        <div style={{marginLeft: 30}}>
                            <div className='new-line'><strong>Aвтобусы</strong></div>
                            <div className='new-line'>ЛИАЗ 529267</div>
                        </div>

                    </div>
                    <div style={styleFlexTwo}>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>42</div>
                            <div style={{fontSize:12}}>Заключены
                                договоры
                                на поставку
                                техники, ед</div>
                        </div>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>558</div>
                            <div style={{fontSize:12}}>Объем
                                инвестиций
                                (стоимость
                                техники),
                                млн руб.</div>
                        </div>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>40</div>
                            <div style={{fontSize:12}}>Передано
                                техники
                                в единицах</div>
                        </div>
                    </div>
                </ModalInfo>
                <ModalInfo isOpen={this.state.modalIsOpen === 'reg11'} closeModal={() => {this.closeModal('reg11')}}>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        centeredSlides={true}
                        loop={true}
                    >
                        <SwiperSlide>
                            <h2 style={styleModalTitle}><strong>Тольяти</strong>, МП «ТПАТП № 3» (Тольятти)   </h2>
                            <div style={styleFlexOne}>
                                <img src="/img/bkadGeography/modal1.png" />
                                <div style={{marginLeft: 30}}>
                                    <div className='new-line'><strong>Aвтобусы</strong></div>
                                    <div className='new-line'>ЛИАЗ 529267  </div>
                                </div>

                            </div>
                            <div style={styleFlexTwo}>
                                <div style={styleFlexTwo}>
                                    <div style={styleBig}>25</div>
                                    <div style={{fontSize:12}}>Заключены
                                        договоры
                                        на поставку
                                        техники, ед</div>
                                </div>
                                <div style={styleFlexTwo}>
                                    <div style={styleBig}>300</div>
                                    <div style={{fontSize:12}}>Объем
                                        инвестиций
                                        (стоимость
                                        техники),
                                        млн руб.</div>
                                </div>
                                <div style={styleFlexTwo}>
                                    <div style={styleBig}>00</div>
                                    <div style={{fontSize:12}}>Передано
                                        техники
                                        в единицах</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h2 style={styleModalTitle}><strong>Тольятио</strong>,МП «ТПАТП № 3» (Тольятти)   </h2>
                            <div style={styleFlexOne}>
                                <img src="/img/bkadGeography/modal1.png" />
                                <div style={{marginLeft: 30}}>
                                    <div className='new-line'><strong>Aвтобусы</strong></div>
                                    <div className='new-line'>ЛИАЗ 529267  </div>
                                </div>

                            </div>
                            <div style={styleFlexTwo}>
                                <div style={styleFlexTwo}>
                                    <div style={styleBig}>25</div>
                                    <div style={{fontSize:12}}>Заключены
                                        договоры
                                        на поставку
                                        техники, ед</div>
                                </div>
                                <div style={styleFlexTwo}>
                                    <div style={styleBig}>300</div>
                                    <div style={{fontSize:12}}>Объем
                                        инвестиций
                                        (стоимость
                                        техники),
                                        млн руб.</div>
                                </div>
                                <div style={styleFlexTwo}>
                                    <div style={styleBig}>00</div>
                                    <div style={{fontSize:12}}>Передано
                                        техники
                                        в единицах</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </ModalInfo>
                <ModalInfo isOpen={this.state.modalIsOpen === 'reg12'} closeModal={() => {this.closeModal('reg12')}}>
                    <h2 style={styleModalTitle}><strong>Череповец</strong>, МУП «Автоколонна 1456» </h2>
                    <div style={styleFlexOne}>
                        <img src="/img/bkadGeography/modal1.png" />
                        <div style={{marginLeft: 30}}>
                            <div className='new-line'><strong>Aвтобусы</strong></div>
                            <div className='new-line'>ЛИАЗ 529267</div>
                        </div>

                    </div>
                    <div style={styleFlexTwo}>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>58</div>
                            <div style={{fontSize:12}}>Заключены
                                договоры
                                на поставку
                                техники, ед</div>
                        </div>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>699</div>
                            <div style={{fontSize:12}}>Объем
                                инвестиций
                                (стоимость
                                техники),
                                млн руб.</div>
                        </div>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>58</div>
                            <div style={{fontSize:12}}>Передано
                                техники
                                в единицах</div>
                        </div>
                    </div>
                </ModalInfo>
                <ModalInfo isOpen={this.state.modalIsOpen === 'all'} closeModal={() => {this.closeModal('all')}}>
                    <h2 style={styleModalTitle}><strong>Череповец</strong>, МУП «Автоколонна 1456» </h2>
                    <div style={styleFlexOne}>
                        <img src="/img/bkadGeography/modal1.png" />
                        <div style={{marginLeft: 30}}>
                            <div className='new-line'><strong>Aвтобусы</strong></div>
                            <div className='new-line'>ЛИАЗ 529267</div>
                        </div>

                    </div>
                    <div style={styleFlexTwo}>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>58</div>
                            <div style={{fontSize:12}}>Заключены
                                договоры
                                на поставку
                                техники, ед</div>
                        </div>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>699</div>
                            <div style={{fontSize:12}}>Объем
                                инвестиций
                                (стоимость
                                техники),
                                млн руб.</div>
                        </div>
                        <div style={styleFlexTwo}>
                            <div style={styleBig}>58</div>
                            <div style={{fontSize:12}}>Передано
                                техники
                                в единицах</div>
                        </div>
                    </div>
                </ModalInfo>
                <ButtonAll/>
            </div>
        );
    }
}
