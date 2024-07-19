"use client";
import React from "react";
import Slider from "react-slick";
import style from "./Testimonial.module.scss";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/slick.css";
import girl from "../../assets/Images/girl.svg";
import leftarrow from "../../assets/Images/arrow-left.svg";
import rightarrow from "../../assets/Images/arrow-right1.svg";
import { Autoplay } from "swiper/modules";
const Testimonial = () => {
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          autoplay: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          speed: 1000,
        },
      },
      {
        breakpoint: 640,
        settings: {
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          speed: 1000,
        },
      },
      {
        breakpoint: 515,
        settings: {
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          speed: 1000,
        },
      },
    ],
  };
  const slider = React.useRef(null);
  return (
    <>
      <section className={`${style.testimonial}`}>
        <div className="testimonial__container container">
          <div className="heading">
            <h2> An enterprise template to ramp up your company website</h2>
          </div>
          {/* arrow-container */}
          <div className="wrapper">
            <div
              onClick={() => slider?.current.slickPrev()}
              className="arrow arrow--left"
            >
              <Image src={leftarrow} alt="arrowleft" />
            </div>
            <div
              onClick={() => slider?.current.slickNext()}
              className="arrow arrow--right"
            >
              <Image src={rightarrow} alt="arrowright" />
            </div>
          </div>
          {/* endArrow-container */}
          <div className="Slider">
            <Slider ref={slider} {...settings}>
              {/* slide1Start */}
              {[1, 2, 3].map((index) => (
                <div className="cards-wrapper">
                  <div className="cards-wrapper__card">
                    <p className="quote">
                      “Buyer buzz partner network disruptive non-disclosure
                      agreement business”
                    </p>
                    <div className="about">
                      <div className="about__img-cont">
                        <Image src={girl} alt="girlwithflower" />
                      </div>
                      <div className="about__position">
                        <div className="name">
                          <p>Albus Dumbledore</p>
                        </div>
                        <div className="post">
                          <p>Manager @ Howarts</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* slide1End */}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
