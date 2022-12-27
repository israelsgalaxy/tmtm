import { useState } from "react";
import Map from "./pages/map";
import points from "./points.js";
import "./styles/App.css";
import Home from "./pages/Home";
import { Link, Route, Routes } from "react-router-dom";
import BookList from "./pages/BookList";

// const token = localStorage.getItem("token") ?? "0"
const token = "12345";

export default function App() {
  let details = useState(points)[0];

  // useEffect(() => {
  //   async function getPoints() {
  //     let response = await fetch(`http://localhost:5000?token=${token}`)
  //     let details = await response.json()

  //     setDetails(details)
  //   }

  //   getPoints()
  // }, [])

  return (
    <div className="App">
      {/* {details ? <Map details={details} token={token} /> : <p>Loading...</p>} */}

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/map" element={<Map details={details} token={token} />} />
        <Route path="/" element={<Map details={details} token={token} />} />
      </Routes>
    </div>
  );
}
