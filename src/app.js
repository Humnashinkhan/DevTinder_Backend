const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();
app.use(express.json());


app.post("/signup", async (req, res) => {

  //creating a new instance of the user model.
  const user = new User ({
    firstName: "Shadab",
    lastName: "Prince",
    emailId: "Shadab9955@gmail.com",
    password: "Shadab@123",
  });
  try{
 await user.save();
  res.send("User Added Successfully!!");
  } catch (err){
    res.status(400).send("Error saving the User:" + err.message);
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
