"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "../../styles/swiper.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import boldo from "../../assets/Images/boldo.svg";
import pres from "../../assets/Images/pres.svg";
import style from "./Hero.module.scss";
import Header from "../Header/Header";
import Image from "next/image";
import Button from "../Button/Button";
import image1 from "../../assets/Images/Group 256.svg";
import image2 from "../../assets/Images/Group 264.svg";
import image3 from "../../assets/Images/Rectangle 1289.svg";
const Hero = () => {
  const settings = {
    slidesPerView: 6,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    modules: [Autoplay, Navigation],
  };

  return (
    <>
      <div className={`${style.hero}`}>
        <div className=" hero__container container">
          <div className="header">
            <Header />
          </div>

          <div className="wrapper">
            <div className="wrapper__left">
              <div className="content">
                <h1 className="content__title">
                  Save time by building fast with Boldo Template
                </h1>
                <p className="content__description">
                  Funding handshake buyer business-to-business metrics iPad
                  partnership. First mover advantage innovator success
                  deployment non-disclosure.
                </p>
              </div>
              <div className="butns">
                <span>
                  <Button
                    children="Buy Template"
                    color="#0A2640"
                    backgroundColor="#65E4A3"
                  />
                </span>

                <span>
                  <Button varient="transparent">Explore</Button>
                </span>
              </div>
            </div>

            <div className="wrapper__right">
              <div className="images-div">
                <Image src={image1} alt="image1" />
              </div>
              <div className="images-div2">
                <span className="img1">
                  <Image src={image3} alt="image2" />
                </span>
                <span className="img2">
                  <Image src={image2} alt="image3" />
                </span>
              </div>
            </div>
          </div>
          <div className="slider">
            <Swiper {...settings}>
              <SwiperSlide>
                <Image className="gradient" src={boldo} alt="logo" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={pres} alt="logo" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={boldo} alt="logo" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={pres} alt="logo" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={boldo} alt="logo" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={pres} alt="logo" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={boldo} alt="logo" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={pres} alt="logo" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={boldo} alt="logo" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
