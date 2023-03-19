import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Maps from "./Map/map";
import points from "../utils/points";

const Map = () => {
  const [show, setShow] = useState();
  let details = useState(points)[0];
  const token = "12345";

  return (
    <>
      <Sidebar show={show} close={setShow} />
      <section className="left-0 md:left-80 lg:left-96 bg-gray-200 dark:bg-gray-800  min-h-screen font-raleway">
        <main className="min-w-full">
          {details ? (
            <Maps details={details} token={token} />
          ) : (
            <p>Loading...</p>
          )}
        </main>
      </section>
    </>
  );
};

export default Map;
