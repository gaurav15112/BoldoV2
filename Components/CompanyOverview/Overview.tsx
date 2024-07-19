"use client";
import React, { useState } from "react";
import style from "./Overview.module.scss";
import officeview from "../../assets/Images/Image.svg";
import Image from "next/image";
import arrowdown from "../../assets/Images/chevron-down.svg";
const Overview = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <section className={`${style.overview}`}>
        <div className="overview__container container">
          <div className="image-section">
            <Image src={officeview} alt="officeview" />
          </div>
          <div className="faq-section">
            <div className="faq-section__txt">
              <p>
                We connect our customers with the best, and help them keep
                up-and stay open.
              </p>
            </div>
            <div className="faq-section__faq">
              {[1, 2].map((card, index) => (
                <div className="wrapper" key={index}>
                  <div className="left">
                    <p className="question">
                      We connect our customers with the best?
                    </p>
                    {isOpen && (
                      <div className="answr">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Lorem ipsum dolor, sit amet consectetur
                          adipisicing elit. Quia, magnam odit. Temporibus
                          quisquam explicabo alias,
                        </p>
                      </div>
                    )}
                  </div>
                  <div
                    className={`${!isOpen ? "right" : "arrowup"}`}
                    onClick={handleClick}
                  >
                    <Image src={arrowdown} alt="arrowdown" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;
