import React from "react";
import "./Models.css";
import { carModels } from "./data";
import PageHeader from "../../components/PageHeader/PageHeader";
import { AiOutlineCar } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
const Models = () => {
  return (
    <>
      <div className="w-full h-full">
        <PageHeader page="Vechile Models" />
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-3 px-2  md:py-10 md:px-8 ">
            {carModels.map((item) => (
              <div key={item.id}>
                <div className=" mt-5 md:mt-0 md:w-[350px] md:h-[500px] border-2 flex flex-col gap-3">
                  <img
                    className=" w-full h-[45%] object-cover mb-4"
                    src={item.image}
                    alt=""
                  />

                  <div className=" px-5 md:px-8 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col items-end ">
                        <h1 className=" text-lg md:text-2xl font-bold">
                          {item.model}
                        </h1>
                      </div>
                      <div className="flex flex-col items-end ">
                        <h1 className=" text-lg md:text-2xl font-bold">
                          {item.rent}
                        </h1>
                        <p>per day</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-lg">
                      <div className="flex items-center gap-3">
                        <AiOutlineCar />
                        <p>{item.brand}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p>{item.rating}</p>
                        <AiOutlineCar />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-lg">
                      <div className="flex items-center gap-3">
                        <AiOutlineCar />
                        <p>{item.transmission}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p>{item.fuel}</p>
                        <AiOutlineCar />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <button className=" bg-[var(--main-color-bg)] text-white capitalize font-semibold mx-5 py-2 md:py-3  md:mx-9">
                    book ride
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-32 my-10 text-2xl font-bold hidden md:flex items-center justify-center bg-black text-white">
          <p className="space-x-5">
            <span> Book a car by getting in touch with us</span>
            <span className="text-[var(--main-color-bg)]">
              <BsTelephone
                style={{ display: "inline-block", marginRight: "10px" }}
              />
              (123) 456-7869
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Models;
