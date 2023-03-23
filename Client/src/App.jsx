import "./styles/index.css";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import themes from "./utils/theme";
// import Home from "./pages/Home/Home";
import MapPage from "./pages/Map";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import Find from "./pages/Find";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <ThemeProvider theme={themes}>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/map" element={<MapPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/find" element={<Find />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}
