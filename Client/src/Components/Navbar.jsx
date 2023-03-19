import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Toggle from "./Toggle";
// import { useUser } from "../context/UserContext";
// import Cookies from "universal-cookie";

const Navbar = () => {
  //   let cookies = new Cookies();
  //   const { user } = useUser();
  let user = false;
  const [active, setActive] = useState("dashboard");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setActive(window.location.pathname);
  }, []);

  const navElements = [
    {
      link: "/",
      text: "Home",
    },
    {
      link: "/map",
      text: "Details",
    },
    {
      link: "/find",
      text: "Co-ride",
    },
    {
      link: "/contact",
      text: "Contact",
    },
  ];

  function menuToggle() {
    if (isOpen) {
      let menu = document.getElementById("menu");
      menu.classList.add("w-0", "h-0", "opacity-0", "hidden");
      menu.classList.remove("w-screen", "min-h-screen", "opacity-95", "flex");
    } else {
      var menu = document.getElementById("menu");
      menu.classList.add("w-screen", "min-h-screen", "opactiy-95", "flex");
      menu.classList.remove("w-0", "h-0", "opacity-0", "hidden");
    }
    setIsOpen(!isOpen);
  }

  const toggleMenu = () => {
    menuToggle();
  };

  return (
    <>
      <div
        className="flex flex-row flex-wrap py-6 md:items-center justify-between text-gray-700 px-4 md:px-9 xl:px-20"
        id="navbar"
      >
        <div className="flex">
          <Link to="/">
            <p className="flex items-center md:mb-0 mr-3 hover:scale-110">
              <i className="fas fa-car fa-lg fa-fw text-blueDeep"></i>
              <span className="text-blueDeep font-raleway font-normal text-lg">
                Cab
              </span>
              <span className="text-gray-600 dark:text-gray-300 font-raleway font-medium text-lg">
                Split
              </span>
            </p>
          </Link>
        </div>
        <nav className="hidden md:flex flex-wrap items-center justify-center ml-4 font-raleway">
          {navElements.map((element, index) => (
            <Link to={element.link} key={index}>
              <p
                className={`mr-5 text-md font-light rounded-xl hover:text-blueDeep hover:text-lg transition ease-in-out duration-200 ${
                  active === element.link
                    ? "text-blueDeep text-lg font-semibold"
                    : "text-gray-700 dark:text-white"
                }`}
              >
                {element.text}
              </p>
            </Link>
          ))}
        </nav>
        <button className="mx-3 md:hidden" onClick={toggleMenu}>
          <i
            className={`fas ${
              isOpen ? "fa-xmark" : "fa-stream"
            } fa-lg fa-fw sm:p-3 py-3 text-blueDeep cursor-pointer`}
          ></i>
        </button>
        {/* <div className="flex md:hidden items-center justify-center">
          <Link to="/login">
            <button className="">
              <i
                className="fas fa-user-circle fa-fw fa-xl py-3 text-blueDeep cursor-pointer"
                aria-hidden="true"
              ></i>
            </button>
          </Link>

        </div>
        <div className="hidden md:flex flex-nowrap">
          <div className="hidden lg:block ml-6">
            {user ? (
              <div className="flex flex-row flex-shrink-0 items-center">
                <Link to="/dashboard">
                  <p className="text-md font-light border border-blueDeep px-6 py-2 dark:text-white rounded-md text-blueDeep hover:bg-blueDeep hover:text-white  transition ease-in-out duration-200">
                    Dashboard
                  </p>
                </Link>
                <i
                  className="fas fa-sign-out fa-lg fa-fw pl-3 text-blueDeep cursor-pointer"
                  onClick={() => logOut()}
                ></i>
              </div>
            ) : (
              <nav className=" md:flex flex-wrap items-center justify-center text-base font-raleway">
                <Link to="/login">
                  <p
                    className={`mr-3 md:mr-5 text-sm font-medium font-raleway border border-blueDeep px-6 py-2 dark:text-white rounded-md text-blueDeep hover:bg-blueDeep hover:text-white transition ease-in-out duration-200 ${
                      active === "/login"
                        ? "bg-blueDeep text-lg text-white"
                        : ""
                    }`}
                  >
                    Ride Now
                  </p>
                </Link>
              </nav>
            )}
          </div>
          <div className="lg:hidden">
            {user ? (
              <Link to="/dashboard">
                <i
                  className="fas fa-house fa-fw fa-xl px-sm-5 text-gray-600 pl-5"
                  aria-hidden="true"
                ></i>
              </Link>
            ) : (
              <Link to="/login">
                <i
                  className="fas fa-user-circle fa-fw fa-xl px-sm-5 text-gray-600 pl-5"
                  aria-hidden="true"
                ></i>
              </Link>
            )}
          </div>
        </div> */}
      </div>

      <div
        id="menu"
        className="hidden z-90 w-0 h-0 justify-center text-gray-800 dark:text-blueDeep bg-gray-200 dark:bg-gray-800 opacity-0 font-raleway font-medium text-lg overflow-y-scroll"
      >
        <div className="flex flex-col text-center items-center text-xl text-gray-800 dark:text-gray-300 pt-6 w-full">
          {navElements.map((element, index) => (
            <Link to={element.link} key={index}>
              <p
                className={`!text-md font-light my-6 hover:text-blueDeep ${
                  active === element.link
                    ? "text-blueDeep text-xl"
                    : "text-gray-700 dark:text-white"
                }`}
              >
                {element.text}
              </p>
            </Link>
          ))}
          {user ? (
            <Link to="/dashboard">
              <p className="font-light my-6 hover:text-blueDeep">Dashboard</p>
            </Link>
          ) : (
            <Link to="/login">
              <p className="font-light my-6 hover:text-blueDeep">Sign In</p>
            </Link>
          )}
          {/* <div className="my-6">
            <Toggle />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
