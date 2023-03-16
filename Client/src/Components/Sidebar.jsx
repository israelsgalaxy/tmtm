import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Assets/fontawesome-free-6.2.1-web/css/solid.css";
import "../Assets/fontawesome-free-6.2.1-web/css/all.css";
import "../Assets/fontawesome-free-6.2.1-web/css/brands.css";
import "../Assets/fontawesome-free-6.2.1-web/css/fontawesome.css";
// import Toggle from "./Toggle";
// import { useUser } from "../context/UserContext";
// import cookies from "universal-cookie";

function Sidebar({ show, close }) {
  //   let cookie = new cookies();

  //   const { user, loading } = useUser();
  const [active, setActive] = useState("dashboard");

  const navElements = [
    {
      link: "/dashboard",
      icon: "fa-solid fa-house",
      text: "Dashboard",
    },
    {
      link: "/wallet",
      icon: "fas fa-wallet",
      text: "Wallet",
    },
    {
      link: "/transactions",
      icon: "fas fa-file-lines",
      text: "Transactions",
    },
    {
      link: "/budgets",
      icon: "fas fa-piggy-bank",
      text: "Budgets",
    },
    {
      link: "/calendar",
      icon: "fas fa-calendar-days",
      text: "Calendar",
    },
    {
      link: "/statistics",
      icon: "fas fa-chart-column",
      text: "Statistics",
    },
    {
      link: "/settings",
      icon: "fas fa-gear",
      text: "Settings",
    },
    {
      link: "/support",
      icon: "fas fa-headset",
      text: "Support",
    },
  ];

  useEffect(() => {
    setActive(window.location.pathname);
  }, []);

  //   if (loading) return <div>Loading...</div>;
  return (
    <>
      <section>
        <aside
          className="hidden md:block fixed top-0 left-0 md:w-64 lg:w-84 h-full md:overflow-x-hidden"
          aria-label="Sidenav"
        >
          <div className="overflow-y-auton overflow-x-hidden hidden md:block md:w-64 lg:w-84 py-5 pl-3 lg:px-4 h-full bg-gray-200 border-r border-gray-300 dark:bg-gray-800 dark:border-gray-700">
            <Link to="/">
              <p className="lg:hidden mt-10 pl-5 py-3">
                <i className="fas fa-car fa-lg fa-fw text-blueDeep"></i>
              </p>
              <p className="hidden lg:flex items-center font-raleway sm:ml-12 lg:ml-0 md:mb-0 mr-3 mt-9 px-2 py-3 font-light text-xl">
                <i className="fas fa-car fa-lg fa-fw text-blueDeep"></i>
                <span className="text-blueDeep">TM</span>
                <span className="text-gray-600 dark:text-gray-300">TM</span>
              </p>
            </Link>
            <hr className="bg-blueDeep opacity-50" />
          </div>
        </aside>
      </section>
    </>
  );
}

export default Sidebar;
