import "./styles/App.css";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import themes from "./utils/theme";
import MapPage from "./pages/Map/MapPage";
import NotFound from "./pages/NotFound";

export default function App() {  
  return (
    <ThemeProvider theme={themes}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}
