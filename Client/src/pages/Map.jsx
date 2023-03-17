import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";

const Map = () => {
  const [show, setShow] = useState();
  return (
    <>
      <Sidebar show={show} close={setShow} />
      <section className="absolute left-0 md:left-80 lg:left-96 bg-gray-200 dark:bg-gray-800  min-h-screen font-raleway">
        <main className="min-w-full bg-gray-100 p-5 sm:p-9">
          <div></div>
        </main>
      </section>
    </>
  );
};

export default Map;
