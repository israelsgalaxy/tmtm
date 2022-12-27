import Navbar from "./Navbar/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import heroImg from "../images/carpool.png";
import { CssBaseline, Container } from "@mui/material";

const Home = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} lg={6}>
            <Box sx={{ width: "100%", maxWidth: 500 }} mt={5} ml={4}>
              <Typography variant="h3" gutterBottom>
                It’s a simple, cheap and fun way to commute together.
              </Typography>
              <Typography variant="body1" gutterBottom paragraph={true}>
                TMTM helps you find people who are headed to the same location
                as you, so you can share a ride and split the cost with them
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <img src={heroImg} alt="" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
