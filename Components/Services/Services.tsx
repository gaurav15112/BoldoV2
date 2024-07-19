import React from "react";
import style from "./Services.module.scss";
import Image from "next/image";
import image1 from "../../assets/Images/card-image1.svg";
import arrowright from "../../assets/Images/arrow-right (2).svg";
import Link from "next/link";
import guywithphone from "../../assets/Images/guywithphone.svg";
import tick from "../../assets/Images/tick.svg";
import bargraph from "../../assets/Images/bargraph.svg";
import Button from "../Button/Button";
import ladywithphone from "../../assets/Images/ladyWithPhone.svg";
import piegraph from "../../assets/Images/Pie Graph.svg";
import smallround from "../../assets/Images/Ellipse 3.svg";
import feather from "../../assets/Images/feather.svg";
const Services = () => {
  return (
    <>
      <div className={`${style.services}`}>
        <div className="services__container container">
          <div className="servicesbox">
            <h2 className="servicesbox__title">Our Services</h2>
            <p className="servicesbox__heading">
              Handshake infographic mass market crowdfunding iteration.
            </p>
          </div>
          <div className="feature-container">
            {[1, 2, 3].map(() => {
              return (
                <div className="feature-card">
                  <div className="feature-card__image-container">
                    <Image
                      src={image1}
                      alt="Feature image"
                      className="feature-card__image"
                    />
                  </div>
                  <div className="feature-card__content">
                    <h3 className="title">Cool feature title</h3>
                    <p className="description">
                      Learning curve network effects return on investment.
                    </p>
                    <Link href="#" className="link">
                      Explore page
                      <span>
                        <Image
                          alt="arrowimage"
                          src={arrowright}
                          className="arrow"
                        />
                      </span>
                    </Link>
                    <div className="line"></div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="customer-feature">
            <div className="customer-feature__left">
              <div className="image-wrapper">
                <Image src={guywithphone} alt="a man with mobile phone" />
                <div className="stats">
                  <div className="stats__img">
                    <Image src={bargraph} alt="bargraph" />
                  </div>

                  <div className="stats__text">
                    <h4 className="num">30%</h4>
                    <p className="desc">More income in June</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="customer-feature__right">
              <div className="details">
                <div className="details__headline">
                  <p>
                    We connect our customers with the best, and help them keep
                    up-and stay open.
                  </p>
                </div>
                {[1, 2, 3].map(() => {
                  return (
                    <>
                      <div className="benefits">
                        <div className="benefits__icon benefits__icon--icon1">
                          <Image src={tick} alt="tick icon" />
                        </div>
                        <div className="benefits__item">
                          <p>We connect our customers with the best.</p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>

              <Button
                backgroundColor="#0A2640"
                padding="16px 56px"
                color="#ffffff"
                className="benefits__btn"
              >
                Start now
              </Button>
            </div>
          </div>

          <div className="customer-feature">
            <div className="customer-feature__right">
              <div className="details">
                <div className="details__headline">
                  <p>
                    We connect our customers with the best, and help them keep
                    up-and stay open.
                  </p>
                </div>
                {[1, 2, 3].map(() => {
                  return (
                    <>
                      <div className="benefits">
                        <div className="benefits benefits--icon-set-1">
                          <Image src={feather} alt="tick icon" />
                        </div>
                        <div className="benefits__item">
                          <p>We connect our customers with the best.</p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="customer-feature__left">
              <div className="image-wrapper">
                <Image src={ladywithphone} alt="a man with mobile phone" />
                <div className="stats2">
                  <div className="stats2__img">
                    <Image src={piegraph} alt="bargraph" />
                  </div>

                  <div className="stats2__text">
                    <div className="stats2__text__img">
                      <Image alt="image" src={smallround} />
                    </div>
                    <div>
                      <p className="desc">35% - Agile Development</p>
                    </div>
                  </div>
                  <div className="stats2__text">
                    <div className="stats2__text__img">
                      <Image alt="image" src={smallround} />
                    </div>
                    <div>
                      <p className="desc">35% - Agile Development</p>
                    </div>
                  </div>
                  <div className="stats2__text">
                    <div className="stats2__text__img">
                      <Image alt="image" src={smallround} />
                    </div>
                    <div>
                      <p className="desc">35% - Agile Development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
