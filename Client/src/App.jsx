import "./styles/index.css";
// import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import themes from "./utils/theme";
import MapPage from "./pages/Map/MapPage";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <ThemeProvider theme={themes}>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/map" element={<MapPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}
