import React from "react";
import "./Card.css";
import harry from "../../assets/testimonials/harry.jfif";
import { BiSolidQuoteRight } from "react-icons/bi";

const Card = ({}) => {
  return (
    <div className=" card__Container flex flex-col px-8 py-10">
      <div className="text-lg md:text-2xl font-medium mb-5">
        "We rented a car from this website and had an amazing experience! The
        booking was easy and the rental rates were very affordable. "
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center space-x-3">
          <div>
            <img className="w-12 md:w-16 rounded-full" src={harry} alt="" />
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold">Parry Hotter</h3>
            <p className="text-sm md:text-base font-semibold text-[var(--text-color-p)]">
              Belgrade
            </p>
          </div>
        </div>
        <BiSolidQuoteRight
          style={{
            color: "var(--main-color-bg)",
            width: "50px",
            height: "30px",
          }}
        />
      </div>
    </div>
  );
};

export default Card;
