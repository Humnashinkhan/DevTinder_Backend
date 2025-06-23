const express = require("express");
const connectDB = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
//Middleware and it is activated for all the routes.
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));    // it will stop giving me cors error.
app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

connectDB()
  .then(() => {
    console.log("Database Connection Stablished....");
    app.listen(7777, () => {
      console.log("Server is sucessfully listening on port 7777...");
    });
  })
  .catch((err) => {
    console.error("Database cannot be Connected!!");
  });
