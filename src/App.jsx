import { useState } from "react";
import Map from "./pages/Map/map";
import points from "./utils/points";
import "./styles/App.css";
import Home from "./pages/Home/Home";
import SignUpForm from "./pages/RegisterPage/Forms/Personal";
import Destination from "./pages/RegisterPage/Forms/Destination";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import themes from "./utils/theme";
import MapPage from "./pages/Map/MapPage";
import Form from "./pages/Form/Form";
import DatePickerField from "./pages/RegisterPage/FormFields/DatePickerField";

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
    <ThemeProvider theme={themes}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/personal" element={<SignUpForm />} />
          <Route path="/register" element={<Form />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/picker" element={<DatePickerField />} />
          <Route
            path="/map"
            element={<Map details={details} token={token} />}
          />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}
