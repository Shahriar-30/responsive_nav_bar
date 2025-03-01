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
    <nav className="bg-white  border-b-2  p-4  lg:p-0 z-50 w-full ">
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
            <ul className=" bg-slate-700 w-[200px] lg:bg-transparent lg:w-full lg:items-center lg:justify-center lg:gap-4 p-2 rounded-[3px] absolute top-[72px] z-30 right-5 lg:static  lg:flex ">
              {/* --- Home  --- */}
              <Link
                to={"/"}
                className="font-nunito font-medium   lg:text-pera text-[18px]"
              >
                <li className="py-[10px] hover:bg-gray-100 text-white hover:text-slate-700 lg:text-slate-700 lg:px-4   hover:rounded-[4px]">
                  Home
                </li>
              </Link>
              {/* --- Graphic Design --- */}

              <li
                className={` cursor-pointer relative font-nunito font-medium lg:text-pera text-[18px]   py-[10px] lg:px-5 hover:bg-gray-100 text-white lg:text-slate-700 hover:text-slate-700  hover:rounded-[4px]`}
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
                  className={`lg:absolute lg:px-0 z-20 top-[46px] left-0  ${
                    graphic ? "block" : "hidden"
                  }  bg-white shadow-md w-[195px] lg:w-[200px] lg:top-[100%] lg:bg-slate-700 `}
                >
                  <Link
                    to={"best-online-logo-design-service-agency/"}
                    className="font-nunito font-medium  lg:text-pera text-[18px] "
                  >
                    <li className=" px-3 py-2 border border-slate-700  text-slate-700 lg:text-white lg:border-white">
                      Logo Design
                    </li>
                  </Link>

                  <Link
                    to={"stationery-design-services-agency/"}
                    className="font-nunito font-medium text-pera text-[18px]"
                  >
                    <li className="px-3 py-2 border border-slate-700  text-slate-700 lg:text-white lg:border-white">
                      Stationary Design
                    </li>
                  </Link>

                  <Link
                    to={"remove-background/"}
                    className="font-nunito font-medium text-pera text-[18px]"
                  >
                    <li className="px-3 py-2 border border-slate-700  text-slate-700 lg:text-white lg:border-white">
                      Remove Background
                    </li>
                  </Link>

                  <Link
                    to={"best-t-shirt-design-services-agency/"}
                    className="font-nunito font-medium text-pera text-[18px]"
                  >
                    <li className="px-3 py-2 border border-slate-700  text-slate-700 lg:text-white lg:border-white">
                      T Shirt Design
                    </li>
                  </Link>

                  <Link
                    to={"packaging-label-design-services/"}
                    className="font-nunito font-medium text-pera text-[18px]"
                  >
                    <li className="px-3 py-2 border border-slate-700  text-slate-700 lg:text-white lg:border-white">
                      Label Design
                    </li>
                  </Link>

                  <Link
                    to={"flyer-design/"}
                    className="font-nunito font-medium text-pera text-[18px]"
                  >
                    <li className="px-3 py-2 border border-slate-700  text-slate-700 lg:text-white lg:border-white">
                      Flyer Design
                    </li>
                  </Link>

                  <Link
                    to={"luxury-candle-label-design-ideas/"}
                    className="font-nunito font-medium text-pera text-[18px]"
                  >
                    <li className="px-3 py-2 border border-slate-700  text-slate-700 lg:text-white lg:border-white">
                      Candle Label Design
                    </li>
                  </Link>
                </ul>
              </li>

              {/* --- Website Development --- */}
              <li
                className="relative py-[10px] lg:px-5 font-nunito font-medium   lg:text-pera text-[18px]  hover:bg-gray-100 text-white lg:text-slate-700 cursor-pointer  hover:text-slate-700 hover:rounded-[4px]"
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
                  }  bg-white shadow-md lg:absolute lg:top-[100%]   lg:left-0 lg:w-[220px] lg:bg-slate-700`}
                >
                  <Link
                    to={"wix-website-design-service-agency/"}
                    className="font-nunito font-medium text-white lg:text-pera text-[18px] "
                  >
                    <li className="px-2 py-2 border border-slate-700  text-slate-700 lg:text-white lg:border-white">
                      Wix Website Design
                    </li>
                  </Link>
                </ul>
              </li>
              {/* --- Digital Marketing --- */}

              <li
                className=" relative py-[10px] lg:px-5 font-nunito font-medium   lg:text-pera text-[18px]  hover:bg-gray-100 text-white lg:text-slate-700 cursor-pointer hover:text-slate-700 hover:rounded-[4px]"
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
                  }  bg-white shadow-md w-[170px] lg:absolute lg:top-[100%] lg:bg-slate-700 lg:w-[180px]`}
                >
                  <Link
                    to={"seo-optimization-service/"}
                    className="font-nunito font-medium text-white lg:text-pera text-[18px] "
                  >
                    <li className="px-3 py-2 border border-slate-700  text-slate-700 lg:text-white lg:border-white">
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
                <li className="py-[10px] hover:bg-gray-100 text-white lg:px-5 lg:text-slate-700 hover:text-slate-700   hover:rounded-[4px]">
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
