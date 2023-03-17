import React, { useState } from "react";
import { formatDate } from "../utils/format";
import { Link } from "react-router-dom";

const BudgetModal = ({ close, data, deleteBudget }) => {
  const date = new Date();
  const [search, setSearch] = useState("Food");
  const [isLoading, setIsLoading] = useState(false);
  const [showDatePickers, setShowDatePickers] = useState(false);

  const [budget, setBudget] = useState({
    duration: 1,
    amount: 0,
    category: "Food",
    icon: "fas fa-utensils fa-lg fa-fw text-xl text-blueDeep",
    startDate: date,
    endDate: 1,
  });

  const handleEditBudgetSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    // close();
  };

  return (
    <>
      <div className="md:p-6 w-full font-raleway">
        <form
          action=""
          autoComplete="new-password"
          onSubmit={handleEditBudgetSubmit}
        >
          <div className="flex items-center justify-between mb-4">
            <Link to="/">
              <span
                className="py-2 px-4 bg-gray-300 border border-blueDeep text-blueDeep hover:dark:bg-gray-800 hover:bg-blueDeep hover:text-white rounded-md dark:bg-gray-700 cursor-pointer"
                onClick={() => close(false)}
              >
                <i className="fas fa-chevron-left fa-md fa-fw"></i>
                <span className="text-md font-raleway">Back</span>
              </span>
            </Link>
          </div>

          <hr className="bg-blueDeep dark:bg-gray-300" />

          <div className="flex items-center justify-between my-4">
            <p className="text-xl font-raleway text-gray-800 dark:text-gray-300 py-auto">
              Ride details.
            </p>
          </div>

          <div className="text-gray-800 dark:text-gray-300 font-raleway">
            <div className="relative w-full">
              <label
                htmlFor="username"
                className="block text-sm text-light font-light text-gray-700 dark:text-gray-300 pb-1"
              >
                Select / Input a new category
              </label>
              <div className="flex items-center justify-center rounded-md border border-blueDeep">
                <input
                  className="py-2 px-4 text-lg rounded-l focus:outline-none focus:border-blueDeep w-full bg-gray-200 dark:bg-gray-800 dark:text-gray-300"
                  type="text"
                  name="username"
                  id="username"
                  placeholder={search}
                  defaultValue={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setBudget({
                      ...budget,
                      category: e.target.value,
                    });
                  }}
                />
                <button type="button" className="py-2 px-3 btn text-blueDeep">
                  <i className={`${budget.icon} fa-lg fa-fw`}></i>
                </button>
              </div>
            </div>
          </div>

          <div className="text-gray-800 dark:text-gray-300 mt-6">
            <div className="mb-6">
              <label
                htmlFor="duration"
                className="font-raleway text-sm text-gray-600 dark:text-gray-300 mb-1"
              >
                Select a time-frame
              </label>
              <div className="flex items-center justify-center rounded-md overflow-hidden border border-blueDeep">
                <select
                  className="py-2.5 px-4 pr-8 w-full text-base font-raleway text-gray-800 dark:text-gray-300 dark:bg-gray-800 focus:outline-none font-light cursor-pointer"
                  id="duration"
                  name="duration"
                  defaultValue={budget.duration}
                  onChange={(e) =>
                    setBudget({
                      ...budget,
                      duration: parseInt(e.target.value),
                      endDate: parseInt(e.target.value),
                    })
                  }
                >
                  <option value="1">Daily</option>
                  <option value="7">Weekly</option>
                  <option value="14">Forthnight</option>
                  <option value="30">Monthly</option>
                  <option value="90">Quaterly</option>
                  <option value="365">Yearly</option>
                  <option value="0">Others</option>
                </select>
                <button type="button" className="px-3 btn text-blueDeep">
                  <i className={`fas fa-clock fa-lg fa-fw`}></i>
                </button>
              </div>
            </div>
            {budget.duration === "0" && (
              <div className="relative w-full mb-4">
                <label
                  htmlFor="duration"
                  className="text-sm text-light font-light text-gray-700 dark:text-gray-300 pb-1"
                >
                  Number of days
                </label>
                <div className="flex items-center justify-center rounded-md border border-blueDeep">
                  <input
                    className="py-2 px-4 text-lg rounded-l font-number focus:outline-none focus:border-blueDeep w-full bg-gray-200 dark:bg-gray-800 dark:text-gray-300"
                    type="tel"
                    name="duration"
                    id="duration"
                    autoComplete="off"
                    placeholder={0}
                    onChange={(e) =>
                      setBudget({
                        ...budget,
                        duration: parseInt(e.target.value),
                        endDate: parseInt(e.target.value),
                      })
                    }
                  />
                  <button className="py-2 px-3 btn text-blueDeep">
                    <i className={`fas fa-calendar-days fa-lg fa-fw`}></i>
                  </button>
                </div>
              </div>
            )}
            <div className="relative w-full">
              <label
                htmlFor="startDate"
                className="text-sm text-light font-light text-gray-700 dark:text-gray-300 pb-1"
              >
                Start date (click the calendar icon)
              </label>
              <div className="flex items-center justify-center rounded-md border border-blueDeep">
                <input
                  className="py-2 px-4 text-lg rounded-l font-light font-number focus:outline-none focus:border-blueDeep w-full bg-gray-200 dark:bg-gray-800 dark:text-gray-300"
                  type="date"
                  name="startDate"
                  id="startDate"
                  autoComplete="off"
                  defaultValue={new Date().toISOString().slice(0, 10)}
                  required
                  // placeholder={formatDate(budget.startDate)}
                  // value={formatDate(budget.startDate)}
                  onChange={(e) =>
                    setBudget({
                      ...budget,
                      startDate: e.target.value,
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

          <div className="text-gray-800 dark:text-gray-300 mt-6">
            <div className="relative w-full">
              <label
                htmlFor="amount"
                className="block text-sm text-light font-light text-gray-700 dark:text-gray-300 pb-1"
              >
                Amount
              </label>
              <div className="flex items-center justify-center rounded-md border border-blueDeep">
                <input
                  className="py-2 px-4 text-lg rounded-l font-number focus:outline-none focus:border-blueDeep w-full bg-gray-200 dark:bg-gray-800 dark:text-gray-300 font-light"
                  type="text"
                  name="amount"
                  id="amount"
                  autoComplete="off"
                  placeholder={budget.amount}
                  defaultValue={budget.amount}
                  onChange={(e) =>
                    setBudget({
                      ...budget,
                      amount: e.target.value,
                    })
                  }
                />
                <button className="py-2 px-3 btn text-blueDeep" type="button">
                  <span className="text-lg font-number">.00</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex mt-6">
            <button
              className="bg-blueDeep hover:bg-blue-600 text-white font-normal py-3 px-4 rounded w-full"
              type="submit"
            >
              <i
                className={`fas fa-pen-to-square fa-md fa-fw pr-6 hidden md:block ${
                  isLoading ? "fa-bounce" : ""
                } `}
              ></i>
              {isLoading ? "Editing...." : "Find Co-ride"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BudgetModal;
