import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { v4 as uuidV4 } from "uuid";
// import useFetch from "../hooks/useFetch";
// import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const BudgetModal = () => {
  // const navigate = useNavigate();
  // const { fetchURL } = useFetch();
  const [isLoading, setIsLoading] = useState(false);
  const [showDatePickers, setShowDatePickers] = useState(false);

  const [rideDetails, setRideDetails] = useLocalStorage("ride", {
    location: "Ikeja, Lagos",
    date: new Date().toISOString().slice(0, 10),
    time: new Date().toISOString().slice(11, 16),
    amount: 0,
    uuid: "",
  });

  const HandleEditBudgetSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // const response = await fetchURL({
    //   path: `http://localhost:4000/`,
    //   method: "GET",
    //   data: JSON.stringify(rideDetails),
    // });

    // const data = await response.json();

    // if (data.status === 200) {
    //   alert("Ride details updated successfully.");
    //   navigate("/find");
    //   setIsLoading(false);
    // } else {
    //   setIsLoading(false);
    //   alert("Something went wrong. Please try again.");
    // }

    window.location.href = "http://localhost:4000";
  };

  return (
    <>
      <div className="md:p-6 w-full font-raleway">
        <form
          action=""
          autoComplete="new-password"
          onSubmit={HandleEditBudgetSubmit}
        >
          <div className="flex items-center justify-between mb-4 mt-2">
            <Link to="/">
              <span className="py-2 px-4 bg-gray-300 border border-blueDeep text-blueDeep hover:dark:bg-gray-800 hover:bg-blueDeep hover:text-white rounded-md dark:bg-gray-700 cursor-pointer">
                <i className="fas fa-chevron-left fa-md fa-fw"></i>
                <span className="text-md font-raleway">Back</span>
              </span>
            </Link>
          </div>

          <div className="flex items-center justify-between mt-6 mb-4">
            <p className="text-2xl font-raleway font-bold text-gray-800 dark:text-gray-300 py-auto">
              Ride details.
            </p>
          </div>

          <div className="text-gray-800 dark:text-gray-300 font-raleway mb-4">
            <div className="relative w-full">
              <label
                htmlFor="location"
                className="block text-sm text-light font-light text-gray-700 dark:text-gray-300 pb-1"
              >
                Location
              </label>
              <div className="flex items-center justify-center rounded-md border border-blueDeep overflow-hidden">
                <input
                  className="py-2 px-4 text-lg focus:outline-none focus:border-blueDeep w-full bg-gray-300 dark:bg-gray-800 dark:text-gray-300"
                  type="text"
                  name="location"
                  id="location"
                  defaultValue={rideDetails.location}
                  required
                  onChange={(e) => {
                    setRideDetails({
                      ...rideDetails,
                      location: e.target.value,
                    });
                  }}
                />
                <button type="button" className="py-2 px-3 btn text-blueDeep">
                  <i className={`fa fa-user-circle fa-lg fa-fw`}></i>
                </button>
              </div>
            </div>
          </div>

          <div className="text-gray-800 dark:text-gray-300 font-raleway">
            <div className="relative w-full mb-4">
              <label
                htmlFor="duration"
                className="text-sm text-light font-light text-gray-700 dark:text-gray-300 pb-1"
              >
                Time
              </label>
              <div className="flex items-center justify-center rounded-md border border-blueDeep">
                <input
                  className="py-2 px-4 text-lg font-light rounded-l font-number focus:outline-none focus:border-blueDeep w-full bg-gray-300 dark:bg-gray-800 dark:text-gray-300 cursor-pointer"
                  type="time"
                  name="duration"
                  id="duration"
                  autoComplete="off"
                  required
                  defaultValue={new Date().toISOString().slice(11, 16)}
                  onChange={(e) =>
                    setRideDetails({
                      ...rideDetails,
                      time: e.target.value,
                    })
                  }
                />
                <button className="py-2 px-3 btn text-blueDeep">
                  <i className={`fas fa-clock fa-lg fa-fw`}></i>
                </button>
              </div>
            </div>

            <div className="relative w-full mb-4">
              <label
                htmlFor="startDate"
                className="text-sm text-light font-light text-gray-700 dark:text-gray-300 pb-1"
              >
                Date
              </label>
              <div className="flex items-center justify-center rounded-md border border-blueDeep overflow-hidden">
                <input
                  className="py-2 px-4 text-lg font-light font-number focus:outline-none focus:border-blueDeep w-full bg-gray-300 dark:bg-gray-800 dark:text-gray-300 cursor-pointer"
                  type="date"
                  name="startDate"
                  id="startDate"
                  autoComplete="off"
                  defaultValue={new Date().toISOString().slice(0, 10)}
                  required
                  onChange={(e) =>
                    setRideDetails({
                      ...rideDetails,
                      date: e.target.value,
                    })
                  }
                />
                <button
                  className="py-2 px-3 btn text-blueDeep"
                  type="button"
                  onClick={() => setShowDatePickers(!showDatePickers)}
                >
                  <i className="fas fa-calendar-days fa-lg fa-fw"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="text-gray-800 dark:text-gray-300">
            <div className="relative w-full">
              <label
                htmlFor="amount"
                className="block text-sm text-light font-light text-gray-700 dark:text-gray-300 pb-1"
              >
                Amount
              </label>
              <div className="flex items-center justify-center rounded-md border border-blueDeep overflow-hidden">
                <input
                  className="py-2 px-4 text-lg font-number focus:outline-none focus:border-blueDeep w-full bg-gray-300 dark:bg-gray-800 dark:text-gray-300 font-light"
                  type="tel"
                  name="amount"
                  id="amount"
                  autoComplete="off"
                  required
                  placeholder={rideDetails.amount}
                  defaultValue={rideDetails.amount}
                  onChange={(e) =>
                    setRideDetails({
                      ...rideDetails,
                      amount: e.target.value,
                    })
                  }
                />
                <button
                  className="py-2 px-3 btn text-blueDeep font-number font-light"
                  type="button"
                >
                  <span className="text-lg font-number">.00</span>
                </button>
              </div>
            </div>
          </div>

          {/* <Link to="/find"></Link> */}
          <div className="flex mt-6">
            <button
              className="bg-blueDeep hover:bg-yellow-600 text-white font-normal py-3 px-4 rounded w-full"
              type="submit"
            >
              <i
                className={`fas fa-pen-to-square fa-md fa-fw pr-6 hidden md:block ${
                  isLoading ? "fa-bounce" : ""
                } `}
              ></i>
              {isLoading ? "Searching...." : "Find your co-ride"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BudgetModal;
