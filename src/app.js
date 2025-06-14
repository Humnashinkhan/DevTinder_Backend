const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const { validateSignUpData } = require("./utils/validation");
const bcrypt = require("bcrypt");
const app = express();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { userAuth } = require("./middleware/auth");

//Middleware and it is activated for all the routes.
app.use(express.json());
app.use(cookieParser());

// SignUp API.
app.post("/signup", async (req, res) => {
  // Validation of data. write some code to validate.
  try {
    validateSignUpData(req);
    const { firstName, lastName, emailId, password } = req.body;
    // Encrypt the password.
    const passwordHash = await bcrypt.hash(password, 10);

    //creating a new instance of the user model.
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });

    await user.save();
    res.send("User Added Successfully!!");
  } catch (err) {
    res.status(400).send("ERROR:" + err.message);
  }
});

//login API.
app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid Credential!!");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      // Create a jwt token.

      const token = await jwt.sign({ _id: user._id }, "DEV@Tinder$55");
      console.log(token);

      // Add the token to cookie and send the response back to the user.
      res.cookie("token", token);
      res.send("Login successfull!!!");
    } else {
      throw new Error("Invalid Credential!!");
    }
  } catch (err) {
    res.status(400).send("ERROR:" + err.message);
  }
});

//Profile API.
app.get("/profile", userAuth, async (req, res) => {
  try {
  //validate my token.
    const user = req.user;
    res.send(user);
} catch (err) {
    res.status(400).send("ERROR:" + err.message);
  }
});



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
