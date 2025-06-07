const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

//Middleware and it is activated for all the routes.
app.use(express.json());

app.post("/signup", async (req, res) => {
  //creating a new instance of the user model.
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User Added Successfully!!");
  } catch (err) {
    res.status(400).send("Error saving the User:" + err.message);
  }
});

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

//Delete API
app.delete("/user", async (req, res) => {
   const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete(userId);
    res.send("User deleted sucessfully!!");
  } catch (err) {
    res.status(400).send("Something Went Wrong");
  }
});

//Update API.



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
