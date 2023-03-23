import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="absolute w-full">
        <Navbar />
      </div>
      <div className="h-screen flex justify-center items-center">
        <div className="px-4 sm:px-10 md:px-20 lg:px-24 xl:px-28 mx-auto flex flex-col lg:flex-row lg:space-x-8">
          <div className="left lg:w-1/2 flex flex-col justify-center items-center md:items-start mb-8">
            <h1 className="font-black text-5xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl font-sans text-center md:text-left mb-4 text-blueDeep">
              <span className="text-2xl sm:text-3xl font-light font-raleway">
                It's simple, just
              </span>
              <br />
              <span>Contact Us!</span>
            </h1>
            <p className="text-sm md:text-lg text-center text-gray-700 md:text-left mb-8 font-raleway md:w-4/5 lg:w-full">
              Say goodbye to expensive cab fares and hello to sharing a ride
              with amazing people just like you? With us, you can finally save
              money and make new friends while commuting across town - let's
              ride together!
            </p>
            <Link to="/map">
              <button className="bg-blueDeep hover:bg-yellow-600 text-white font-normal text-lg py-3 w-full px-12 md:w-[300px] font-raleway rounded-md">
                <i className="fa-solid fa-headphones fa-md fa-fw text-white pr-4"></i>
                <span className="pl-2">Contact Now</span>
              </button>
            </Link>
            <div className=" md:hidden  bg-blueDeep h-[450px] md:w-[380px] w-full mt-6 rounded-xl"></div>
          </div>
          <div className="right lg:w-1/2 flex justify-center items-center bg-gray-300 h-full"></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
