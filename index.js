const express = require("express");
const mongoose = require("mongoose");
const app_routes_system = require("./src/routes");
const app = express();
require("dotenv").config();

app.listen(process.env.PORT, () => {
    console.log("Connect in the port ${process.env.PORT}");
  });
  
  mongoose.set("strictQuery", false);
  
  mongoose
    .connect(process.env.STRING_CONECTION)
    .then(() => console.log("Success connection"))
    .catch((err) => console.error(err));
  
  app.use(express.json());
  app_routes_system(app);