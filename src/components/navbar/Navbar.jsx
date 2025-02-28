import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  let [menu, setMenu] = useState(true);

  let [graphic, setGraphic] = useState(false);
  const [website, setWebsite] = useState(false);
  const [digital, setDigital] = useState(false);

  let handleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    function navbar(e) {
      if (window.innerWidth < 1024) {
        setMenu(false);
      } else {
        setMenu(true);
      }
    }
    navbar();
    window.addEventListener("resize", navbar);
  }, []);
  return (
    <nav className="bg-white  border-b-2  p-4 lg:p-2 z-50 w-full ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-3 lg:px-0">
          <Link>
            <p>Logo </p>
          </Link>

          {menu ? (
            <FaBarsStaggered
              onClick={handleMenu}
              className="text-[22px] lg:hidden absolute  right-6 lg:right-14"
            />
          ) : (
            <FaBars
              onClick={handleMenu}
              className="text-[22px] lg:hidden absolute  right-6 lg:right-12"
            />
          )}
          {menu && (
            <ul className=" bg-slate-700 w-[200px] lg:bg-transparent p-2 rounded-[3px] absolute top-[72px] z-30 right-5 lg:static  lg:flex ">
              {/* --- Home  --- */}
              <Link
                to={"/"}
                className="font-nunito font-medium   lg:text-pera text-[18px]"
              >
                <li className="py-[10px] hover:bg-gray-100 text-white hover:text-slate-700   hover:rounded-[4px]">
                  Home
                </li>
              </Link>
              {/* --- Graphic Design --- */}

              <li
                className={`relative font-nunito font-medium lg:text-pera text-[18px]   py-[10px] hover:bg-gray-100 text-white hover:text-slate-700  hover:rounded-[4px]`}
                onClick={() => {
                  setGraphic(!graphic);
                  setWebsite(false);
                  setDigital(false);
                }}
                onMouseEnter={() => {
                  setGraphic(!graphic);
                  setWebsite(false);
                  setDigital(false);
                }}
                onMouseLeave={() => {
                  setGraphic(!graphic);
                  setWebsite(false);
                  setDigital(false);
                }}
              >
                Graphic Design
                <ul
                  className={`labsolute z-20 top-[46px] left-0  ${
                    graphic ? "block" : "hidden"
                  }  bg-white shadow-md w-[195px] `}
                >
                  <Link
                    to={"best-online-logo-design-service-agency/"}
                    className="font-nunito font-medium  lg:text-pera text-[18px] "
                  >
                    <li className=" px-3 py-2 border border-slate-700  text-slate-700 ">
                      Logo Design
                    </li>
                  </Link>

                  <Link
                    to={"stationery-design-services-agency/"}
                    className="font-nunito font-medium text-pera text-[18px]"
                  >
                    <li className="px-3 py-2 border border-slate-700  text-slate-700 ">
                      Stationary Design
                    </li>
                  </Link>

                  <Link
                    to={"remove-background/"}
                    className="font-nunito font-medium text-pera text-[18px]"
                  >
                    <li className="px-3 py-2 border border-slate-700  text-slate-700 ">
                      Remove Background
                    </li>
                  </Link>

                  <Link
                    to={"best-t-shirt-design-services-agency/"}
                    className="font-nunito font-medium text-pera text-[18px]"
                  >
                    <li className="px-3 py-2 border border-slate-700  text-slate-700">
                      T Shirt Design
                    </li>
                  </Link>

                  <Link
                    to={"packaging-label-design-services/"}
                    className="font-nunito font-medium text-pera text-[18px]"
                  >
                    <li className="px-3 py-2 border border-slate-700  text-slate-700">
                      Label Design
                    </li>
                  </Link>

                  <Link
                    to={"flyer-design/"}
                    className="font-nunito font-medium text-pera text-[18px]"
                  >
                    <li className="px-3 py-2 border border-slate-700  text-slate-700">
                      Flyer Design
                    </li>
                  </Link>

                  <Link
                    to={"luxury-candle-label-design-ideas/"}
                    className="font-nunito font-medium text-pera text-[18px]"
                  >
                    <li className="px-3 py-2 border border-slate-700  text-slate-700">
                      Candle Label Design
                    </li>
                  </Link>
                </ul>
              </li>

              {/* --- Website Development --- */}
              <li
                className="relative py-[10px] font-nunito font-medium   lg:text-pera text-[18px]  hover:bg-gray-100 text-white hover:text-slate-700 hover:rounded-[4px]"
                onClick={() => {
                  setWebsite(!website);
                  setGraphic(false);
                  setDigital(false);
                }}
                onMouseEnter={() => {
                  setWebsite(!website);
                  setGraphic(false);
                  setDigital(false);
                }}
                onMouseLeave={() => {
                  setWebsite(!website);
                  setGraphic(false);
                  setDigital(false);
                }}
              >
                Website Development
                <ul
                  className={` top-[46px] left-0  ${
                    website ? "block" : "hidden"
                  }  bg-white shadow-md `}
                >
                  <Link
                    to={"wix-website-design-service-agency/"}
                    className="font-nunito font-medium text-white lg:text-pera text-[18px] "
                  >
                    <li className="px-2 py-2 border border-slate-700  text-slate-700 ">
                      Wix Website Design
                    </li>
                  </Link>
                </ul>
              </li>
              {/* --- Digital Marketing --- */}

              <li
                className=" relative py-[10px] font-nunito font-medium   lg:text-pera text-[18px]  hover:bg-gray-100 text-white hover:text-slate-700 hover:rounded-[4px]"
                onClick={() => {
                  setDigital(!digital);
                  setGraphic(false);
                  setWebsite(false);
                }}
                onMouseEnter={() => {
                  setDigital(!digital);
                  setGraphic(false);
                  setWebsite(false);
                }}
                onMouseLeave={() => {
                  setDigital(!digital);
                  setGraphic(false);
                  setWebsite(false);
                }}
              >
                Digital Marketing
                <ul
                  className={`top-[46px] left-0  ${
                    digital ? "block" : "hidden"
                  }  bg-white shadow-md w-[170px]  `}
                >
                  <Link
                    to={"seo-optimization-service/"}
                    className="font-nunito font-medium text-white lg:text-pera text-[18px] "
                  >
                    <li className="px-3 py-2 border border-slate-700  text-slate-700">
                      Seo Optimization
                    </li>
                  </Link>
                </ul>
              </li>
              {/* --- Contact Us --- */}
              <Link
                to={"digital-service-agency-contact-us/"}
                className="font-nunito font-medium text-white lg:text-pera text-[18px]"
              >
                <li className="py-[10px] hover:bg-gray-100 text-white hover:text-slate-700   hover:rounded-[4px]">
                  Contact Us
                </li>
              </Link>
            </ul>
          )}

          <div className="hidden lg:block">
            <Link
              to={"/registration"}
              className="font-nunito font-medium text-pera text-[18px] border border-[#44CE6F] hover:border-[#C679E3]  hover:text-pera hover:duration-700  px-[34px] py-[7px]   border-1.5  rounded-[5px] "
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
