import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex justify-center items-center">
        <div className="container mx-auto flex flex-col lg:flex-row lg:space-x-8">
          <div className="left lg:w-1/2 flex flex-col justify-center items-center md:items-start mb-8">
            <h1 className="font-black sm:text-7xl md:text-8xl lg:text-7xl xl:text-9xl font-sans text-center md:text-left mb-4 text-blueDeep">
              <span className="text-3xl font-light font-raleway">
                Save Money on Your
              </span>
              <br />
              <span>Next Ride!</span>
            </h1>
            <p className="text-lg text-center text-gray-700 md:text-left mb-8 font-raleway md:w-4/5 lg:w-full">
              Say goodbye to expensive cab fares and hello to sharing a ride
              with amazing people just like you? With us, you can finally save
              money and make new friends while commuting across town - let's
              ride together!
            </p>
            <Link to="/map">
              <button className="bg-blueDeep hover:bg-yellow-600 text-white font-normal text-lg py-3 w-full md:w-[300px] font-raleway rounded-md">
                <i class="fa-solid fa-taxi fa-md fa-fw text-white pr-4"></i>
                <span className="pl-2">Let's Ride</span>
              </button>
            </Link>
          </div>
          <div className="right lg:w-1/2 flex justify-center items-center bg-gray-300 h-full"></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
