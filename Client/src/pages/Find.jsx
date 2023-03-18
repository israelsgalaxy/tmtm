import React from "react";
import Navbar from "../Components/Navbar";
import { studentData } from "../data/students";
import useFilter from "../hooks/useFilter";

const Find = () => {
  const { filteredData, searchQuery, handleSearchQueryChange, handleReset } =
    useFilter(studentData);
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="min-h-screen sm:px-9 mt-6">
        <div className="flex flex-col">
          <h1 className="text-center text-2xl font-raleway font-normal md:text-left mb-4 text-blueDeep">
            Find Riders.
          </h1>
          <div>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchQueryChange}
            />
            <button onClick={handleReset}>Reset</button>
            <ul>
              {filteredData.map((student) => (
                <li key={student.uuid}>
                  {student.name} - {student.destination} - {student.time} - $
                  {student.ride_fee}
                </li>
              ))}
            </ul>
          </div>

          {/* <button className="bg-blueDeep hover:bg-yellow-600 text-white text-lg py-4 w-full md:px-16 lg:w-[300px] font-raleway font-light rounded-md">
            Get Started
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Find;
