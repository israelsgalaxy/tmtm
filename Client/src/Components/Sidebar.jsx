import React from "react";
import "../Assets/fontawesome-free-6.2.1-web/css/solid.css";
import "../Assets/fontawesome-free-6.2.1-web/css/all.css";
import "../Assets/fontawesome-free-6.2.1-web/css/brands.css";
import "../Assets/fontawesome-free-6.2.1-web/css/fontawesome.css";
import Form from "./Form";
// import Toggle from "./Toggle";
// import { useUser } from "../context/UserContext";

function Sidebar({ show, close }) {
  //   const { user, loading } = useUser();
  //   if (loading) return <div>Loading...</div>;
  return (
    <>
      <section>
        <aside
          className="hidden md:block fixed z-10 top-0 left-0 md:w-80 lg:w-96 h-full md:overflow-x-hidden"
          aria-label="Sidenav"
        >
          <div className="overflow-y-auto overflow-x-hidden hidden md:block py-5 pl-3 lg:px-4 h-full bg-gray-300 border-r border-gray-300 dark:bg-gray-800 dark:border-gray-700">
            <Form />
          </div>
        </aside>
        <div className="md:hidden fixed inset-0 z-10 bg-gray-300 dark:bg-gray-800 bg-opacity-50 transition-opacity font-raleway ">
          <div className="fixed inset-0 z-10 overflow-y-auto flex min-h-full items-end justify-center p-4 text-center md:items-center sm:p-0">
            <div className="relative transform overflow-x-hidden overflow-y-auto rounded-lg text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg p-4 h-[350px] border border-blueDeep bg-gray-300 opacity-80">
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sidebar;
