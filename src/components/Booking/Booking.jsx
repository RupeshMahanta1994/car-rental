import React from "react";
import "./Booking.css";
import { carType } from "./data";
import { locations } from "./data";
import { AiFillCar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { LuCalendarSearch } from "react-icons/lu";
import Button from "../Button/Button";

const Booking = () => {
  return (
    <div className="booking__Container px-4 py-6 md:px-8 md:py-10 lg:px-10 lg:py-14 rounded-md my-32">
      <h2 className="text-lg font-bold mb-5">Book a car</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label
            className="flex items-center gap-2 capitalize font-medium  mb-3"
            htmlFor=""
          >
            <AiFillCar /> select your car type{" "}
            <sup style={{ color: "#ff4d30" }}>*</sup>
          </label>
          <select name="" id="" className="w-full border-2 rounded-md p-2">
            {carType.map((item, index) => (
              <option key={index} value="">
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            className="flex items-center gap-2 capitalize font-medium  mb-3"
            htmlFor=""
          >
            <MdLocationOn /> pick-up <sup style={{ color: "#ff4d30" }}>*</sup>
          </label>
          <select name="" id="" className="w-full border-2 rounded-md p-2">
            {locations.map((item, index) => (
              <option key={index} value="">
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            className="flex items-center gap-2 capitalize font-medium  mb-3"
            htmlFor=""
          >
            <MdLocationOn /> drop-of <sup style={{ color: "#ff4d30" }}>*</sup>
          </label>
          <select name="" id="" className="w-full border-2 rounded-md p-2">
            {locations.map((item, index) => (
              <option key={index} value="">
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            className="flex items-center gap-2 capitalize font-medium  mb-3"
            htmlFor=""
          >
            <LuCalendarSearch /> pick-up{" "}
            <sup style={{ color: "#ff4d30" }}>*</sup>
          </label>
          <input
            type="date"
            name=""
            id=""
            className="w-full border-2 rounded-md p-2"
          ></input>
        </div>

        <div>
          <label
            className="flex items-center gap-2 capitalize font-medium  mb-3"
            htmlFor=""
          >
            <LuCalendarSearch /> drop-of{" "}
            <sup style={{ color: "#ff4d30" }}>*</sup>
          </label>
          <input
            type="date"
            name=""
            id=""
            className="w-full border-2 rounded-md p-2"
          ></input>
        </div>

        <div className=" mt-auto">
          <Button title="submit" />
        </div>
      </div>
    </div>
  );
};

export default Booking;
