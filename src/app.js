const express = require("express");
const connectDB = require("./config/database");
const app = express();

connectDB()
  .then(() => {
    console.log("Database Connection Stablished....");
    app.listen(7777, () => {
      console.log("Server is sucessfully listening on port 7000...");
    });
  })
  .catch((err) => {
    console.error("Database cannot be Connected!!");
  });
