import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const Map = () => {
  const [show, setShow] = useState();
  return (
    <>
      <Sidebar show={show} close={setShow} />
      <section className="absolute overflow-y-auto left-0 sm:left-16 lg:left-96 display-size bg-gray-200 dark:bg-gray-800 p-5 sm:p-9 min-h-screen min-w-full">
        <main className="w-full flex xl:w-full mx-auto">
          <div className="w-full xl:w-full">
            <div className="row pt-6 overflow-x-auto mb-8"></div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Map;
