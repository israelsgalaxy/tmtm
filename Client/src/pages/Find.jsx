import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { studentData } from "../data/students";
import useFilter from "../hooks/useFilter";
import RidersDisplay from "../Components/RidersDisplay";
import useLocalStorage from "../hooks/useLocalStorage";
import ActionModal from "../Components/ActionModal";

const Find = () => {
  const [show, setShow] = useState(false);

  const roundUp = (num) => {
    return Math.ceil(num / 1000) * 1000;
  };

  let data = studentData.map((student) => {
    return {
      ...student,
      amount: roundUp(student.amount),
    };
  });

  const [ride, setRide] = useLocalStorage("ride");
  console.log(ride);

  const { filteredData, searchQuery, handleSearchQueryChange, handleReset } =
    useFilter(data);
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="min-h-screen mt-6 px-4 sm:px-10 md:px-20 lg:px-24 xl:px-28">
        <div className="flex flex-col">
          <div className="md:flex flex-row w-full mb-3 md:space-x-4 lg:space-x-6">
            <div className="w-full md:w-1/2">
              <h1 className="text-2xl font-raleway font-normal md:text-left mb-4 text-blueDeep">
                Find Riders
              </h1>
              <div className="flex">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchQueryChange}
                  placeholder="Search..."
                  className="px-4 py-2 w-[300px] border border-gray-300 focus:border-blueDeep rounded-md mr-4 focus:outline-none"
                />
                <button
                  className="p-2 text-gray-400 hover:text-blueDeep border border-gray-300 hover:border-blueDeep rounded-md"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
              <div className="flex items-center mt-4 overflow-x-auto overflow-x-sscroll">
                <p className="text-lg font-raleway text-gray-800">Filter By:</p>
                <p className="p-1.5 ml-3 rounded-md text-base border border-gray-300 text-gray-400 font-number font-light cursor-pointer hover:text-gray-900 hover:border-gray-900">
                  {ride.amount}
                </p>
                <p className="p-1.5 ml-3 rounded-md text-base border border-gray-300 text-gray-400 font-number font-light cursor-pointer hover:text-gray-900 hover:border-gray-900">
                  {ride.date}
                </p>
                <p className="p-1.5 ml-3 rounded-md text-base border border-gray-300 text-gray-400 font-raleway font-light cursor-pointer hover:text-gray-900 hover:border-gray-900">
                  {ride.location.split(",")[0]}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="md:w-[400px] p-7 bg-gray-100 dark:bg-gray-700 rounded-md mt-8">
                <div className="flex justify-between items-center">
                  <p className="text-md font-number font-light text-gray-800 dark:text-gray-300">
                    {ride.date} | {ride.time}
                  </p>
                  <i
                    className="fas fa-pen-to-square fa-lg fa-fw pr-8 cursor-pointer hover:text-blueDeep"
                    onClick={() => setShow(true)}
                  ></i>
                </div>
                <div className="mt-2 flex flex-row justify-between">
                  <p className="text-2xl font-normal text-gray-800 dark:text-gray-200">
                    {ride.location}
                  </p>
                  <p className="font-number font-light text-xl text-gray-800 dark:text-gray-300 mt-1">
                    #{ride.amount}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <RidersDisplay transactions={filteredData} />
          {filteredData.length === 0 && (
            <div className="w-full mt-4 rounded-lg flex flex-col items-center justify-center font-raleway text-xl text-center px-6 whitespace-nowrap py-24 text-gray-800 dark:text-gray-300 bg-gray-300 dark:bg-gray-700">
              <i className="fas fa-magnifying-glass fa-xl fa-fw fa-bounce text-blueDeep dark:text-gray-200 mb-5"></i>
              <span className="text-2xl font-semibold mb-1">Not Found</span>

              <small className="mb-2 text-md">
                Search result for "{searchQuery}" is empty
              </small>
            </div>
          )}

          {/* <button className="bg-blueDeep hover:bg-yellow-600 text-white text-lg py-4 w-full md:px-16 lg:w-[300px] font-raleway font-light rounded-md">
            Get Started
          </button> */}
        </div>
      </div>
      {show && <ActionModal />}
    </>
  );
};

export default Find;
