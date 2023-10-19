import React from "react";
import "./Testimonials.css";
import Card from "../Card/Card";

const Testimonials = () => {
  return (
    <div className="my-20">
      <div className=" text-center">
        <h3 className="text-lg font-semibold">Reviewed by People</h3>
        <h1 className="text-4xl md:text-5xl font-bold my-4">
          Client's Testimonials
        </h1>
        <p className="text-base md:text-lg px-10 lg:px-52 mb-10 text-[#706f7b]">
          Discover the positive impact we've made on the our clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:px-20 lg:px-0">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Testimonials;
