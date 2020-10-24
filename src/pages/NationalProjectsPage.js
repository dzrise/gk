import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Header from "../components/NationalProjectsPage/Header";
import Card from "../components/NationalProjectsPage/Card";
import ItemProject from "../components/NationalProjectsPage/ItemProject";

export default class NationalProjectsPage extends Component {

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
            left: '48%',
            width: '100%',
            height: '100%'
        }
        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
                slidesToSlide: 3 // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 2 // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1 // optional, default to 1.
            }
        };
        return (
            <>
                <div className="national-projects" style={pageStyle}>
                    <Header/>
                    <div className='national-projects__inner' style={styleInner}>
                        <Card />
                        <div style={styleCarousel}>
                            <Carousel
                                swipeable={false}
                                draggable={false}
                                showDots={true}
                                responsive={responsive}
                                ssr={true}
                                infinite={true}
                                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                                autoPlaySpeed={1000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                deviceType={this.props.deviceType}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                            >
                                <ItemProject title={'Безопасность и качество \n автомобильных  дорог'} backgroundImage='/img/project-1.png'/>
                                <ItemProject title={'Цифровая \n экономика'} backgroundImage='/img/project-2.png'/>
                                <ItemProject title={'Модернизация \n инфраструктуры'} backgroundImage='/img/project-3.png'/>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
