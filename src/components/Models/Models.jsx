import React, { useState } from "react";
import { modelNames } from "./data";
import { models } from "./data";
import one from "../../assets/models/1.png";
import Button from ".././Button/Button";
import "./Models.css";
const Models = () => {
  const [modelNumber, setModelNumber] = useState(1);
  console.log(modelNumber);
  return (
    <div>
      <div className=" text-center">
        <h3 className="text-lg font-semibold">Vehicle Models</h3>
        <h1 className="text-4xl md:text-5xl font-bold my-4">
          Our rental fleet
        </h1>
        <p className="text-base md:text-lg px-10 mb-10 text-[#706f7b]">
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>
      <div className="grid grid-cols-1 gap-2  lg:grid-cols-5 place-items-center md:gap-1 justify-center">
        <div className="text-xl space-y-1">
          {modelNames.map((item, i) => (
            <>
              <div
                className="bg-gray-300/50 font-semibold px-5 py-3 rounded-sm cursor-pointer"
                onClick={() => setModelNumber(i)}
              >
                {item}
              </div>
            </>
          ))}
        </div>
        <div className="col-span-3  flex items-center justify-center">
          <img
            className="w-[80%] h-[80%] scale-up-center"
            src={models[modelNumber].image}
            alt=""
          />
        </div>

        <div className="w-full h-full">
          <div className=" w-full text-xl font-bold text-white text-center bg-[#ff4d30] md:py-2">
            {models[modelNumber].rent} / rent per day
          </div>
          <table className="w-full text-base text-center ">
            <tr>
              <td>Model</td>
              <td className="capitalize">{models[modelNumber].model}</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td className="capitalize">{models[modelNumber].mark}</td>
            </tr>
            <tr>
              <td>Year</td>
              <td>{models[modelNumber].year}</td>
            </tr>
            <tr>
              <td>Doors</td>
              <td>{models[modelNumber].doors}</td>
            </tr>
            <tr>
              <td>AC</td>
              <td className="capitalize">{models[modelNumber].ac}</td>
            </tr>
            <tr>
              <td>Transmission</td>
              <td className="capitalize">{models[modelNumber].transmission}</td>
            </tr>
            <tr>
              <td>Fuel</td>
              <td className="capitalize">{models[modelNumber].fuel}</td>
            </tr>
          </table>
          <Button title="RESERVE NOW" />
        </div>
      </div>
    </div>
  );
};

export default Models;
