const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const { validateSignUpData } = require("./utils/validation");
const bcrypt = require("bcrypt");
const app = express();

//Middleware and it is activated for all the routes.
app.use(express.json());
// app.use(cookieParser());
// SignUp API.
app.post("/signup", async (req, res) => {
  // Validation of data. write some code to validate.
  try {
    validateSignUpData(req);
    const {firstName, lastName, emailId, password } = req.body;
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
    try{
      const { emailId, password } = req.body;

      const user = await User.findOne({ emailId: emailId });
       if(!user) {
        throw new Error("Invalid Credential!!");
       }
       const isPasswordValid = await bcrypt.compare(password, user.password);
         if(isPasswordValid) {
            res.send("Login successfull!!!");
         }
         else{
          throw new Error("Invalid Credential!!");
         }
    }catch (err) {
    res.status(400).send("ERROR:" + err.message);
  }
});

//Profile API.
app.get("/profile", async (req, res) => {

    //  const cookies = req.cookies;
    //  console.log(cookies);
    //  res.send("Reading Cookie!");
})


//Get user By Email.
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const users = await User.find({ emailId: userEmail });
    if (users.length === 0) {
      res.status(404).send("User Not Found!!");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Something Went Wrong");
  }
});


//Feed API  -GET/feed - get all the users from the database.
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Something Went Wrong");
  }
});



//Delete a user from the database.
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete(userId);
    res.send("User deleted sucessfully!!");
  } catch (err) {
    res.status(400).send("Something Went Wrong");
  }
});



//Update data of the User.
app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;

  const ALLOWED_UPDATES = ["photoURL", "about", "gender", "age", "skills"];

  const isUpdateAllowed = Object.keys(data).every((k) =>
    ALLOWED_UPDATES.includes(k)
  );
  if (!isUpdateAllowed) {
    throw new Error("Update Not Allowed");
  }
  if (data?.skills.length > 10) {
    throw new Error("Skills can not be more than 10");
  }
  try {
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
      runValidators: "true",
    });
    res.send("User Updated Successfully!!");
  } catch (err) {
    res.status(400).send("UPDATE FAILED:" + err.message);
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
