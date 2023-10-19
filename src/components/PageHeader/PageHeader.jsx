import React from "react";
import "./pageHeader.css";

const PageHeader = ({ page }) => {
  return (
    <div className="PageHeader w-full h-[350px]  flex justify-center-center md:px-10 space-y-3 ">
      <div className="space-y-1 md:space-x-2 text-lg ml-5 mt-5">
        <h1 className="capitalize text-4xl lg:text-4xl font-semibold">
          {page}
        </h1>
        <p className="capitalize">
          <a href="/">Home</a>/{page}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
