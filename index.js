const express = require("express");
const router = require("./routes/routes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/", router);

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "http://localhost:4000"],
  })
);

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}!`);
});
