import React from "react";
import "./Contact.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationArrow1 } from "react-icons/ci";

const Contact = () => {
  return (
    <div>
      <PageHeader page="contact" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-5 md:mx-16 lg:mx-32 my-10 md:my-16 lg:my-28">
        <div>
          <h1 className="text-xl md:text-5xl font-bold">
            Need additional information?
          </h1>
          <p className="text-lg text-[var(--text-color-p)] my-3 md:my-5">
            A multifaceted professional skilled in multiple fields of research,
            development as well as a learning specialist. Over 15 years of
            experience.
          </p>
          <div className="md:text-lg font-semibold space-y-3">
            <p>
              <BiPhoneCall style={{ display: "inline-block" }} /> (123) 456-7869
            </p>
            <p>
              <AiOutlineMail style={{ display: "inline-block" }} />{" "}
              carrental@gmail.com
            </p>
            <p>
              <CiLocationArrow1 style={{ display: "inline-block" }} />{" "}
              Bangaluru, India
            </p>
          </div>
        </div>

        <form className="flex flex-col  justify-start">
          <label
            htmlFor=""
            className="flex items-center gap-2 capitalize font-medium  mb-3"
          >
            full name <sup className="text-[var(--main-color-bg)]">*</sup>
          </label>
          <input
            type="text"
            className="w-full border-none bg-gray-100 rounded-md p-3 mb-2"
            placeholder="E.g. 'Ravi Kumar'"
          />

          <label
            htmlFor=""
            className="flex items-center gap-2 capitalize font-medium  mb-3"
          >
            email <sup className="text-[var(--main-color-bg)]">*</sup>
          </label>
          <input
            type="email"
            className="w-full border-none bg-gray-100 rounded-md p-3 mb-2"
            placeholder="youremail@emial.com"
          />

          <label
            htmlFor=""
            className="flex items-center gap-2 capitalize font-medium  mb-3"
          >
            Tell us about it<sup className="text-[var(--main-color-bg)]">*</sup>
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="6"
            className="w-full border-none bg-gray-100 rounded-md p-3 mb-2"
          >
            Write Here...
          </textarea>
          <button className=" flex items-center justify-center text-white bg-[var(--main-color-bg)] py-3 space-x-3">
            <AiOutlineMail style={{ display: "inline-block" }} />{" "}
            <p>Send Mail</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
