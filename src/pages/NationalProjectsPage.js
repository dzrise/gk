import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import Header from "../components/NationalProjectsPage/Header";
import Card from "../components/NationalProjectsPage/Card";
import ItemProject from "../components/NationalProjectsPage/ItemProject";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class NationalProjectsPage extends Component {
    constructor() {
        super();
        this.state = {
            loop: false,
            showCard: true,
            active: '',
        }

        this.setLoop = this.setLoop.bind(this)
        this.setActive = this.setActive.bind(this)
    }
    setLoop(){
        if(this.state.loop === false) {
            this.setState({loop: true})
        }
        if(this.state.showCard === true){
            this.setState({showCard: false})
        }
    }
    setActive(id){
        this.setState({active: id})
        switch (id) {
            case 0:
                setTimeout(() => {
                        this.props.history.push('/bkad')
                    },
                    1000
                )
                break;
            case 1:
                setTimeout(() => {
                        this.props.history.push('/digital-economy')
                    },
                    1000
                )
                break;
        }
    }
    render() {
        let pageStyle = {
            position: 'relative',
            height: '100%',
            backgroundImage: 'url(/img/fonlandproject.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom center',
            backgroundSize: '100% 100%',
        }
        let styleInner = {
            padding: '100px 50px 0 50px'
        }
        let styleCarousel = {
            position: 'absolute',
            top: 130,
            left: '3.66%',
            width: '100%',
        }
        return (
            <>
                <div className="national-projects" style={pageStyle}>
                    <Header/>
                    <div className='national-projects__inner' style={styleInner}>
                        <Card showCard={this.state.showCard}/>
                        <div style={styleCarousel}>
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={3}
                                navigation
                                pagination={{ clickable: false }}
                                scrollbar={{ draggable: false }}
                                centeredSlides={true}
                                grabCursor={true}
                                loop={this.state.loop}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => this.setLoop()}
                            >
                                <SwiperSlide onClick={()=>{this.setActive(0)}}>
                                    <ItemProject title={'Безопасность и качество \n автомобильных  дорог'} backgroundImage='/img/project-1.png' isActive={this.state.active === 0} />
                                </SwiperSlide>
                                <SwiperSlide onClick={()=>{this.setActive(1)}}>
                                    <ItemProject title={'Цифровая \n экономика'} backgroundImage='/img/project-2.png' isActive={this.state.active === 1} />
                                </SwiperSlide >
                                <SwiperSlide onClick={()=>{this.setActive(2)}}>
                                    <ItemProject title={'Модернизация \n инфраструктуры'} backgroundImage='/img/project-3.png' isActive={this.state.active === 2} />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default withRouter(NationalProjectsPage)
