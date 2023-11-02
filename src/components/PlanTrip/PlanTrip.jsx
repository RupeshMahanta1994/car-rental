import React from "react";
import "./PlanTrip.css";
import { methods } from "./data";

const PlanTrip = () => {
  return (
    <div className="text-center">
      <h4 className="text-lg font-semibold">Plan your trip now</h4>
      <h1 className="font-bold text-3xl md:text-5xl my-5">
        Quick & easy car rental
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-14 my-12 md:my-24">
        {methods.map((item) => (
          <div key={item.id}>
            <div className="flex flex-col items-center">
              <img className="w-1/2" src={item.image} alt="" />
              <h2 className="text-lg font-bold capitalize  my-3">
                {item.title}
              </h2>
              <p className="font-semibold text-[#706f7b]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanTrip;
