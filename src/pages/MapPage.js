import Map from "./map";
import points from "../points.js";
import { useState } from "react";


const token = "12345";


const MapPage = () => {
    let details = useState(points)[0];

  return (
    <>
      <h1>Map Page</h1>
      {details ? <Map details={details} token={token} /> : <p>Loading...</p>}
    </>
  );
};

export default MapPage;
