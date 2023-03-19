import React, { useState } from "react";
import { Link } from "react-router-dom";

const PaginatedTransactions = ({ transactions }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage, setTransactionsPerPage] = useState(20);
  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleTransactionsPerPageChange = (event) => {
    setTransactionsPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * transactionsPerPage;
  const endIndex = startIndex + transactionsPerPage;
  const currentTransactions = transactions.slice(startIndex, endIndex);

  return (
    <div className="">
      <div className="flex items-center justify-between mt-8">
        {currentTransactions.length !== 0 && (
          <p className="text-gray-700 dark:text-gray-300 font-number text-lg font-normal">
            {startIndex + 1}-{Math.min(endIndex, transactions.length)} of{" "}
            {transactions.length}
          </p>
        )}
        {currentTransactions.length === 0 && (
          <p className="text-gray-700 dark:text-gray-300 font-number text-lg font-normal">
            0 of {transactions.length}
          </p>
        )}

        <div className="mr-4">
          <select
            className="p-1.5 mx-1.5 font-number font-normal bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-blueDeep focus:outline-none rounded-md"
            value={transactionsPerPage}
            onChange={handleTransactionsPerPageChange}
          >
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <span className="text-gray-700 dark:text-gray-400">per page</span>
        </div>
      </div>

      <div className="hidden md:table mt-8 w-full font-raleway">
        <div className="flex flex-col overflow-x-auto min-w-full align-middle">
          {currentTransactions.length !== 0 && (
            <table className="min-w-full divide-y divide-gray-400 dark:divide-gray-500 font-raleway">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-200 uppercase"
                  >
                    S/N
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-200 uppercase"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-200 uppercase"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-200 uppercase"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-200 uppercase"
                  >
                    Destination
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-200 uppercase"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {currentTransactions.map((element, index) => (
                  <tr
                    className="hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md cursor-pointer"
                    key={index}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-number font-light text-gray-800 dark:text-gray-400">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-number font-light text-sm text-gray-800 dark:text-gray-400">
                      {element.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-400">
                      {element.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-number font-light text-sm text-gray-800 dark:text-gray-400">
                      #{element.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-400">
                      {element.destination}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-400">
                      <a
                        href="#edit"
                        className="text-blue-500 hover:text-blue-700"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <div className="md:hidden w-full mt-10 font-raleway">
        {currentTransactions.map((element, index) => {
          return (
            <div
              className="w-full p-7 bg-gray-300 dark:bg-gray-700 rounded-md mb-3"
              key={index}
            >
              <div className="flex justify-between items-center">
                <p className="text-md font-number font-light text-gray-800 dark:text-gray-300">
                  {element.date}
                </p>
              </div>
              <div className="mt-2">
                <p className="text-2xl font-normal text-gray-800 dark:text-gray-200">
                  {element.name}
                </p>
                <p className="font-normal font-number text-lg text-gray-800 dark:text-gray-300 mt-1">
                  #{element.amount}
                </p>
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="text-lg pt-2 font-normal text-gray-800 dark:text-gray-200">
                  {element.destination}
                </p>
                <div className="text-gray-800 dark:text-gray-400">
                  <i className="fas fa-pen-to-square fa-lg fa-fw pr-8 cursor-pointer hover:text-blueDeep"></i>
                  <i className="fas fa-trash fa-lg fa-fw cursor-pointer hover:text-blueDeep"></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center mt-8">
        <div>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`mx-1 p-1.5 h-12 w-12 mb-2 rounded-md font-number font-normal text-md ${
                currentPage === index + 1
                  ? "bg-blueDeep text-white"
                  : "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaginatedTransactions;
