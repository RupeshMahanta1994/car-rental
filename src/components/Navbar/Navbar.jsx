import React, { useState } from "react";
import "./Navbar.css";
import { navLinks } from "./data";
import Button from "../Button/Button";
import logo from "../../assets/logo/logo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <nav className="w-full bg-white z-10 h-[60px] px-6 md:px-10  fixed top-3  flex items-center justify-between">
        {/*Logo */}
        <div className="h-full">
          <div className="w-3/4 lg:w-full h-full py-2">
            <img className="w-full h-full" src={logo} alt="" />
          </div>
          <div>
            <button
              onClick={() => navLinks.map((item) => console.log(item.link))}
            >
              Hello
            </button>
          </div>
        </div>
        {/*Logo */}
        {/*Navlinks */}
        <div className="hidden lg:flex space-x-6 text-black text-lg  capitalize">
          <a href="/" className="navlinks">
            Home
          </a>
          <a href="/about" className="navlinks">
            About
          </a>
          <a href="/contact" className="navlinks">
            Contact
          </a>
          {navLinks.map((item) => (
            <a className="navlinks" href={item.link} key={item.title}>
              {item.title}
            </a>
          ))}
        </div>

        {/*Navlinks */}
        {/*Login Buttons */}
        <div className="hidden lg:flex space-x-4 items-center justify-center capitalize">
          <div className="capitalize text-lg">sign in</div>
          <Button title="register" link="/contact" />
        </div>
        {/*Login Buttons */}
        <div
          className="lg:hidden "
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? (
            <AiOutlineClose
              className="flip-scale-up-hor"
              style={{
                width: "50px",
                height: "30px",
                color: "#ff4d30",
              }}
            />
          ) : (
            <RiMenu3Fill
              className="scale-up-center"
              style={{
                width: "50px",
                height: "30px",
                color: "#ff4d30",
              }}
            />
          )}

          {showMobileMenu ? (
            <div className=" absolute scale-up-center top-14 right-8 md:right-16 bg-orange-600 px-5 py-3">
              <div className="flex flex-col space-y-3 text-lg capitalize text-white">
                {navLinks.map((item) => (
                  <a
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    href={item.link}
                    key={item.title}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
