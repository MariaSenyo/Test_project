import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "./SwiperSlides.scss";
import {Button} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import React from "react";
import SwiperCore, {Keyboard, Pagination, Navigation, Autoplay} from 'swiper';
import "swiper/css/bundle";


SwiperCore.use([Keyboard, Pagination, Navigation, Autoplay]);

export default function SwiperSlides() {
    return (
        <>
            <Swiper slidesPerView={1}
                    spaceBetween={30}
                    keyboard={{"enabled": true}}
                    pagination={{"clickable": true}}
                    navigation={true}
                    autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }}
                    className="mySwiper">
                <SwiperSlide>
                    <h1>Lorem ipsum - это текст рыба... предназначен для чего то там и разработке проектов</h1>
                    <p>Proven methods to capture business priorities and goals as well as current pain points
                        that enables measurable business outcomes. Proven methods to capture business priorities
                        and goals as well as current pain points that enables measurable business outcomes.
                        Proven methods to capture business priorities and goals as well as current pain points
                        that enables measurable business outcomes. Proven methods to capture business priorities
                        and goals as well as current pain points that enables measurable business outcomes.
                        Proven methods to capture business priorities and goals as well as current pain points
                        that enables measurable business outcomes.</p>
                    <div className="span-wrapper">
                        <span>26.06.2021</span>
                        <Button className="read-arrow">Читать</Button>
                        <ArrowForwardIcon className='arrow'/>
                    </div>
                    <div className='line'/>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>Lorem ipsum - это текст рыба... предназначен для чего то там и разработке проектов</h1>
                    <p>Proven methods to capture business priorities and goals as well as current pain points
                        that enables measurable business outcomes. Proven methods to capture business priorities
                        and goals as well as current pain points that enables measurable business outcomes.
                        Proven methods to capture business priorities and goals as well as current pain points
                        that enables measurable business outcomes. Proven methods to capture business priorities
                        and goals as well as current pain points that enables measurable business outcomes.
                        Proven methods to capture business priorities and goals as well as current pain points
                        that enables measurable business outcomes.</p>
                    <div className="span-wrapper">
                        <span>26.06.2021</span>
                        <Button className="read-arrow">Читать</Button>
                        <ArrowForwardIcon className='arrow'/>
                    </div>
                    <div className='line'/>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>Lorem ipsum - это текст рыба... предназначен для чего то там и разработке проектов</h1>
                    <p>Proven methods to capture business priorities and goals as well as current pain points
                        that enables measurable business outcomes. Proven methods to capture business priorities
                        and goals as well as current pain points that enables measurable business outcomes.
                        Proven methods to capture business priorities and goals as well as current pain points
                        that enables measurable business outcomes. Proven methods to capture business priorities
                        and goals as well as current pain points that enables measurable business outcomes.
                        Proven methods to capture business priorities and goals as well as current pain points
                        that enables measurable business outcomes.</p>
                    <div className="span-wrapper">
                        <span>26.06.2021</span>
                        <Button className="read-arrow">Читать</Button>
                        <ArrowForwardIcon className='arrow'/>
                    </div>
                    <div className='line'/>
                </SwiperSlide>
                <SwiperSlide><h1>Lorem ipsum - это текст рыба... предназначен для чего то там и разработке проектов</h1>
                    <p>Proven methods to capture business priorities and goals as well as current pain points
                        that enables measurable business outcomes. Proven methods to capture business priorities
                        and goals as well as current pain points that enables measurable business outcomes.
                        Proven methods to capture business priorities and goals as well as current pain points
                        that enables measurable business outcomes. Proven methods to capture business priorities
                        and goals as well as current pain points that enables measurable business outcomes.
                        Proven methods to capture business priorities and goals as well as current pain points
                        that enables measurable business outcomes.</p>
                    <div className="span-wrapper">
                        <span>26.06.2021</span>
                        <Button className="read-arrow">Читать</Button>
                        <ArrowForwardIcon className='arrow'/>
                    </div>
                    <div className='line'/>
                </SwiperSlide>
                <SwiperSlide><h1>Lorem ipsum - это текст рыба... предназначен для чего то там и разработке проектов</h1>
                    <p>Proven methods to capture business priorities and goals as well as current pain points
                        that enables measurable business outcomes. Proven methods to capture business priorities
                        and goals as well as current pain points that enables measurable business outcomes.
                        Proven methods to capture business priorities and goals as well as current pain points
                        that enables measurable business outcomes. Proven methods to capture business priorities
                        and goals as well as current pain points that enables measurable business outcomes.
                        Proven methods to capture business priorities and goals as well as current pain points
                        that enables measurable business outcomes.</p>
                    <div className="span-wrapper">
                        <span>26.06.2021</span>
                        <Button className="read-arrow">Читать</Button>
                        <ArrowForwardIcon className='arrow'/>
                    </div>
                    <div className='line'/>
                </SwiperSlide>
            </Swiper>
        </>
    )
}


