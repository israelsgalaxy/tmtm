import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="container mx-auto flex flex-col md:flex-row">
          <div className="left md:w-1/2 flex flex-col justify-center items-center md:items-start">
            <h1 className="font-black text-8xl font-sans text-center md:text-left mb-4 text-blueDeep">
              <span className="text-3xl font-light font-raleway">
                Save Money on Your
              </span>
              <br />
              <span>Next Ride!</span>
            </h1>
            <p className="text-lg text-center md:text-left mb-8 font-raleway">
              Say goodbye to expensive cab fares and hello to sharing a ride
              with amazing people just like you? With us, you can finally save
              money and make new friends while commuting across town - let's
              ride together!
            </p>
            <button className="bg-blueDeep hover:bg-yellow-600 text-white font-bold text-lg py-4 w-full md:px-16 lg:w-[300px] font-raleway rounded-md">
              Get Started
            </button>
          </div>
          <div className="right md:w-1/2 flex justify-center items-center bg-gray-300">
            <img
              className="max-w-full h-auto"
              src="https://via.placeholder.com/400x400"
              alt="CabSplit"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
