"use client";
import React, { useState } from "react";
import style from "./Overview.module.scss";
import officeview from "../../assets/Images/Image.svg";
import Image from "next/image";
import arrowdown from "../../assets/Images/chevron-down.svg";
const FaqItem = [
  {
    id: 1,
    question: "We connect our customers with the best?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing",
  },
  {
    id: 2,
    question: "Android research & development rockstar?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing",
  },
];
interface FaqItem {
  id: number;
  question: string;
}
interface OverviewProps {
  data: FaqItem;
}
const Overview: React.FC<OverviewProps> = ({ data }) => {
  console.log(data);
  const [openAccordian, setOpenAccordian] = useState(null);
  const handleAccordian = (id: any) => {
    setOpenAccordian(id === openAccordian ? null : id);
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
              {FaqItem.map((item, index) => (
                <div className="wrapper" key={index}>
                  <div className="left">
                    <p className="question" key={item.question}>
                      We connect our customers with the best?
                    </p>
                    {openAccordian === item.id && (
                      <div className="answr">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                  <div
                    className={`${
                      openAccordian !== item.id ? "right" : "arrowup"
                    }`}
                    onClick={() => handleAccordian(item.id)}
                  >
                    <Image key={item.id} src={arrowdown} alt="arrowdown" />
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
