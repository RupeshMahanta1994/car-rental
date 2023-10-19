import React from "react";

const Button = ({ title, logo, link }) => {
  return (
    <div className="space-x-1 capitalize bg-[#ff4d30] text-white text-center px-5 py-2 rounded-md">
      <a href={link}>
        <span>{title}</span>
        <span>{logo}</span>
      </a>
    </div>
  );
};

export default Button;
