import React from "react";
import Button from "../Button/Button";
import "./Footer.css";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" footer__Container grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10 lg:grid-cols-4 px-8 md:px-20 mt-14 pt-8 md:py-20 text-center md:text-left">
      <div>
        <h2>
          <b>CAR</b> Rental
        </h2>
        <p className="mb-5 text-[var(--text-color-p)]">
          We offers a big range of vehicles for all your driving needs. We have
          the perfect car to meet your needs.
        </p>
        <div className="flex items-center justify-start gap-2">
          <BiPhoneCall /> (123)-456-789
        </div>
        <div className="flex items-center justify-start gap-2">
          <AiOutlineMail /> carrenta@gmail.com
        </div>
        <p>Designed by @rupeshmahanta</p>
      </div>

      <div>
        <h2>
          <b>COMPANY</b>
        </h2>
        <div>
          <ul>
            <li>New York</li>
            <li>Careers</li>
            <li>Mobile</li>
            <li>Blog</li>
            <li>How we work</li>
          </ul>
        </div>
      </div>

      <div>
        <h2>
          <b>WORKING HOURS</b>
        </h2>
        <div>
          <ul>
            <li>Mon - Fri: 9:00AM - 9:00PM</li>
            <li>Sat: 9:00AM - 19:00PM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
      </div>

      <div>
        <h2>
          <b>SUBSCRIPTION</b>
        </h2>
        <p className="mb-5">
          Subscribe your Email address for latest news & updates.
        </p>
        <input
          className="w-full bg-gray-300 px-5 py-2 md:py-2 mb-3 rounded-sm"
          type="text"
          placeholder="Enter Email Address"
        />
        <Button title="submit" />
      </div>
    </div>
  );
};

export default Footer;
