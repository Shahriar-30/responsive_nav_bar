import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { ImArrowDownRight } from "react-icons/im";

const Navbar = () => {
  const [mobileTab, setMobileTab] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState({
    graphics: false,
    web: false,
    marketing: false,
  });

  const handleDropdown = (menu) => {
    setToggleDropdown((prevState) => ({
      graphics: menu === "graphics" ? !prevState.graphics : false,
      web: menu === "web" ? !prevState.web : false,
      marketing: menu === "marketing" ? !prevState.marketing : false,
    }));
  };

  return (
    <nav
      className={`flex items-center justify-between px-5 py-3 lg:py-0 bg-[#eee] ${
        mobileTab ? "border-b-2 border-black" : ""
      }`}
    >
      {/* Logo */}
      <p className="text-green-500 text-[30px]">Logo</p>

      {/* Mobile Menu Toggle */}
      <div className="flex justify-center gap-4 items-center lg:hidden">
        <p className="text-[20px] hover:underline cursor-pointer">Login</p>
        <TiThMenu
          className="text-[33px] w-[50px] cursor-pointer"
          onClick={() => setMobileTab(!mobileTab)}
        />
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          mobileTab ? "flex" : "hidden"
        } text-[18px] flex-col gap-[18px] justify-center items-center absolute top-18 left-0 bg-[#eee] w-full py-[20px] lg:flex lg:flex-row lg:relative lg:top-0 lg:gap-3`}
      >
        <li>Home</li>
        
        {/* Graphics Design Dropdown */}
        <li
          onClick={() => handleDropdown("graphics")}
          className="flex gap-2 items-center cursor-pointer"
        >
          Graphics Design <ImArrowDownRight />
        </li>
        {toggleDropdown.graphics && (
          <ul className="flex flex-col gap-[10px]  text-[17px] lg:absolute lg:top-[130%] lg:right-[60%] lg:px-[10px] lg:bg-[#eee]">
            <li>Logo Design</li>
            <li>Banner Design</li>
            <li>UI/UX Design</li>
          </ul>
        )}

        {/* Website Development Dropdown */}
        <li
          onClick={() => handleDropdown("web")}
          className="flex gap-2 items-center cursor-pointer"
        >
          Website Development <ImArrowDownRight />
        </li>
        {toggleDropdown.web && (
          <ul className="flex flex-col gap-[10px]  text-[17px] lg:absolute lg:top-[130%] lg:bg-[#eee]">
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Full Stack Development</li>
          </ul>
        )}

        {/* Digital Marketing Dropdown */}
        <li
          onClick={() => handleDropdown("marketing")}
          className="flex gap-2 items-center cursor-pointer"
        >
          Digital Marketing <ImArrowDownRight />
        </li>
        {toggleDropdown.marketing && (
          <ul className="flex flex-col justify-center items-center gap-[10px] text-[17px] lg:absolute lg:top-[130%] lg:right-[30%] lg:bg-[#eee]">
            <li>SEO</li>
            <li>Social Media Marketing</li>
            <li>Content Marketing</li>
          </ul>
        )}

        <li>Contact Us</li>
      </ul>

      {/* Desktop Login */}
      <div className="hidden lg:block">
        <p className="text-[20px] hover:underline cursor-pointer">Login</p>
      </div>
    </nav>
  );
};

export default Navbar;
