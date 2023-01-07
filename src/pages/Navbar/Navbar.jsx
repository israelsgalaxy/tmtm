import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleClick = (event) => {
    event.preventDefault();
    const element = document.getElementById("footer");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="secondary" elevation={0}>
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: "none" }}>
                TMTM
              </Link>
            </Typography>

            <Button color="inherit">
              <a href="#footer" onClick={handleClick}>
                THE DEVELOPERS
              </a>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
