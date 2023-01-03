// import { Paper, Container, Box, Typography } from "@mui/material";

// export default function Footer() {
//   return (
//     <Paper
//       sx={{
//         marginTop: "calc(1% + 42px)",
//         width: "100%",
//         // position: "fixed",
//         bottom: 0,
//         left: 0,
//         right: 0,
//       }}
//       component="footer"
//       square
//       variant="outlined"
//     >
//       <Container maxWidth="lg">
//         <Box
//           sx={{
//             flexGrow: 1,
//             justifyContent: "center",
//             display: "flex",
//             my: 1,
//           }}
//         >
//           <div>
//             {/* <Image priority src="/Logo.svg" width={75} height={30} alt="Logo" /> */}
//           </div>
//         </Box>

//         <Box
//           sx={{
//             flexGrow: 1,
//             justifyContent: "center",
//             display: "flex",
//             mb: 2,
//           }}
//         >
//           <Typography variant="h6" color="initial">
//             Made with ❤️ by Israel and Victor
//           </Typography>
//         </Box>
//       </Container>
//     </Paper>
//   );
// }

const Footer = () => {
  return (
    <footer id="footer">
      Made with ❤️ by{" "}
      <a href="https://ng.linkedin.com/in/israel-galadima-446a54198">Israel</a>{" "}
      and{" "}
      <a href="https://www.linkedin.com/in/victor-williams-chukwudi">Victor</a>
    </footer>
  );
};

export default Footer;
