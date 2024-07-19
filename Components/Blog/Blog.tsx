import React from "react";
import style from "./Blog.module.scss";
const Blog = ({ posts }: any) => {
  console.log(posts);
  return (
    <>
      <div className={`${style.blog}`}>
        <div className="container blog__container">
          <div className="header">
            <h2 className="header__title">Our Blog</h2>
            <h3 className="header__subtitle">
              Value proposition accelerator product management venture
            </h3>
          </div>
          <hr className="blog-line" />

          <div className="blogContent">
            {[1, 2, 3].map(() => {
              return (
                <div className="item">
                  <div className="item__title">
                    We are <span className="item-highlight">committed</span>
                  </div>
                  <div className="item__description">
                    <p>
                      Conversion angel investor entrepreneur first mover
                      advantage. Handshake infographic mass market crowdfunding
                      iteration.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
