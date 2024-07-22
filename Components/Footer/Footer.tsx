"use client";
import React from "react";
import footerstyle from "./footer.module.scss";
import logo from "../../assets/Images/Logo1.svg";
import Image from "next/image";
import { title } from "process";
import { link } from "fs";
import Link from "next/link";
// interface footerData<Array>
//   {
//     id: string;
//     color:string;

//   },
// ]

const footerData = [
  {
    id: 1,
    category: "Landings",
    links: [{ title: "Home" }, { title: "Products" }, { title: "Services" }],
  },
  {
    id: 2,
    category: "Company",
    links: [
      { title: "Home" },
      { title: "Careers", isHiring: true },
      { title: "Services" },
    ],
  },
  {
    id: 3,
    category: "Resources",
    links: [{ title: "Blog" }, { title: "Products" }, { title: "Services" }],
  },
];
const Footer = () => {
  return (
    <>
      <footer className={`${footerstyle.footer}`}>
        <div className="footer__container container">
          <div className="footer__left">
            <div className="footer__left__logo ">
              <Image src={logo} alt="logo" />
            </div>
            <div className="footer__left__descr">
              <p>
                Social media validation business model canvas graphical user
                interface launch party creative facebook iPad twitter.
              </p>
            </div>
            <div className="footer__al-r-reserved">
              <div>
                <p>All rights reserved.</p>
              </div>
            </div>
          </div>
          <div className="footer__right">
            {footerData.map((section, index) => {
              return (
                <>
                  <div key={index} className="footer__right__links">
                    <div className="head">{section.category}</div>
                    <div className="list">
                      <ul>
                        {section.links.map((link, linkIndex) => {
                          return (
                            <>
                              <li
                                key={linkIndex}
                                className={link.isHiring ? "hiring" : ""}
                              >
                                {link.title}
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
