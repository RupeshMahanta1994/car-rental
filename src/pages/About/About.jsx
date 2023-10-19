import React from "react";
import "./About.css";
import { typeList } from "./data";
import PlanTrip from "../../components/PlanTrip/PlanTrip";
import PageHeader from "../../components/PageHeader/PageHeader";
import pageHeaderImage from "../../assets/pageHeader.png";
import aboutImage from "../../assets/about/about.jpg";

const About = () => {
  console.log(typeList);
  return (
    <div>
      <PageHeader page="about" />
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center md:gap-10 mx-6 my-16 md:my-32 lg:mx-32">
        <div>
          <img src={aboutImage} alt="" />
        </div>
        <div className="mt-8 md:mt-0">
          <h4 className="font-semibold md:text-lg">About Company</h4>
          <h1 className=" text-xl md:text-2xl lg:text-5xl font-bold">
            You start the engine and your adventure begins
          </h1>
          <p className=" md:text-base text-[var(--text-color-p)] my-6 md:my-6 lg:my-8">
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly attended.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-5">
            {typeList.map((item) => (
              <>
                <div className="space-y-3 grid grid-cols-1 place-items-start">
                  <img src={item.icon} alt="" />
                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 place-items-center">
                    <div className="text-5xl font-extrabold">{item.number}</div>
                    <div className="capitalize">{item.type}</div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-8 md:mx-10 lg:mx-40">
        <PlanTrip />
      </div>
    </div>
  );
};

export default About;
