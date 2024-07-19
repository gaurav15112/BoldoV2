import React from "react";
import style from "./newsletter.module.scss";

const NewsLetter = () => {
  return (
    <>
      <div className={`${style.nletter}`}>
        <div className="nletter__container container">
          <div className="nletter__wrapper">
            <div className="firstdiv">
              <p>An enterprise template to ramp up your company website</p>
            </div>
            <div className="sdiv">
              <div className="email">
                <input type="text" placeholder="your email address" />
              </div>
              <div className="button">
                <span>Start now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewsLetter;
