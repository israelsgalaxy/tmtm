import React from "react";

const Find = () => {
  return (
    <>
      <div className="min-h-screen flex items-center">
        <div className="container mx-auto flex flex-col md:flex-row">
          <div className="flex flex-col">
            <h1 className="font-black text-8xl font-sans text-center md:text-left mb-4 text-blueDeep">
              <span className="text-3xl font-light font-raleway">
                Find Riders.
              </span>
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
        </div>
      </div>
    </>
  );
};

export default Find;
