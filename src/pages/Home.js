import Navbar from "./Navbar/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import heroImg from "../images/carpool.png";
import { CssBaseline, Container, Button, Paper } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

const Home = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Container maxWidth="lg">
          <Grid
            container
            spacing={5}
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            mt={5}
          >
            <Grid item sm={12} md={6} lg={6} mt={0}>
              <Box sx={{ width: "100%", maxWidth: 500 }} mt={0} ml={0}>
                <Typography variant="h3" gutterBottom>
                  It’s a simple, cheap and fun way to commute together.
                </Typography>
                <Typography variant="body1" gutterBottom paragraph={true}>
                  TMTM helps you find people who are headed to the same location
                  as you, so you can share a ride and split the cost with them
                </Typography>
                <Box mt={5}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    disableElevation
                  >
                    Get Started
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={12} md={6} lg={6}>
              <Box sx={{ width: "100%", maxWidth: 500 }} mt={0} ml={0}>
                <img src={heroImg} alt="" width="500px" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Home;
