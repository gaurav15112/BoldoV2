import React from "react";
import style from "./newsarticle.module.scss";
import Image from "next/image";
import image1 from "../../assets/Images/Rectangle.svg";
import pPic from "../../assets/Images/Ellipse10.svg";
import image2 from "../../../../public/Images/image2.svg";
import image3 from "../../../../public/Images/image3.svg";
import image4 from "../../../../public/Images/image4.svg";
import image5 from "../../../../public/Images/image5.svg";
import image6 from "../../../../public/Images/image6.svg";
import image7 from "../../../../public/Images/image7.svg";
const NewsArticle = () => {
  return (
    <>
      <div className={`${style.article}`}>
        <div className="article__container container">
          <div className="servicesbox">
            <h2 className="servicesbox__title">Our Blog</h2>
            <p className="servicesbox__heading">
              Value proposition accelerator product management venture
            </p>
          </div>
          <div className="article__section">
            <div className="article__section__fstrow">
              {[1, 2, 3].map((cards, index) => {
                return (
                  <div key={index} className="card">
                    <div className="card__image">
                      <Image src={image1} alt="image" />
                    </div>
                    <div className="card__content">
                      <div className="catog">Category</div>
                      <div className="date">November 22, 2021</div>
                    </div>
                    <div className="card__descr">
                      <p>
                        Seed round direct mailing non-disclosure agreement
                        graphical user interface rockstar.
                      </p>
                    </div>
                    <div className="card__footer">
                      <div className="image">
                        <Image src={pPic} alt="image" width={32} height={32} />
                      </div>
                      <div className="author">
                        <p> John Doe</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button className=" article__btn">
            <span>Load more</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsArticle;
