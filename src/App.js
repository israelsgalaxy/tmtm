import { useState } from "react";
import Map from "./pages/map";
import points from "./points.js";
import "./styles/App.css";
import Home from "./pages/Home";
import SignUpForm from "./pages/Register";
import Destination from "./pages/Destination";
import { Link, Route, Routes } from "react-router-dom";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import BookLayout from "./pages/BookLayout";
import NewBook from "./pages/NewBook";

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

      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/map">Map</Link>
          </li>
        </ul>
      </nav> */}

      <Routes>
        <Route path="/" element={<Destination />} />
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
          {/* <Route path="/books/:id" element={<Book />} /> */}
        </Route>
        <Route path="/map" element={<Map details={details} token={token} />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </div>
  );
}
