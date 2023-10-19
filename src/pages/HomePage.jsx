import React from "react";
import Button from "../components/Button/Button";
import heroCar from "../assets/heroCar.png";
import Booking from "../components/Booking/Booking";
import PlanTrip from "../components/PlanTrip/PlanTrip";
import Models from "../components/Models/Models";
import Testimonials from "../components/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <div className="w-full md:mt-28 px-6 md:px-10 lg:px-32">
      <div className=" container mx-auto bg flex  items-center justify-center gap-10  ">
        {/*Hero Section*/}
        <div className="flex-1 text-center lg:text-left">
          <div>
            <h2 className="text-xl font-bold">Plan your trip now</h2>
            <h1 className="text-6xl font-bold my-5">
              Save <span className="text-[rgb(255,77,48)]">big</span> with our
              car rental
            </h1>
          </div>
          <p className="text-lg text-[var(--text-color-paragraph)]">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="flex justify-center lg:justify-start space-x-3 mt-5">
            <Button title="book ride" />
            <Button title="learn more" />
          </div>
        </div>
        <div className=" hidden lg:flex lg:flex-1">
          <img src={heroCar} alt="" />
        </div>
      </div>
      {/*Hero Section*/}
      {/*Booking Car section*/}
      <Booking />
      {/*Booking Car section*/}
      {/*Plan trip*/}
      <PlanTrip />
      {/*Plan trip*/}
      {/*Avalabel Models*/}
      <Models />
      {/*Avalabel Models*/}
      {/*Client testimonials*/}
      <Testimonials />
      {/*Client testimonials*/}
    </div>
  );
};

export default HomePage;
