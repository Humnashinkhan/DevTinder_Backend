const express = require("express");

const app = express();

//This will only handle to GET call to /user
app.get("/getUserData", (req, res) => {
  try{
  //logic of DB call and get user data.

  throw new Error("vkdfknvkdf")
   res.send("user data send");
  } catch (err) {
    res.status(500).send("Some error contact support team");
  }
});

// sequence is matter a lot, error can be handle over here.
app.use("/", (err, req, res, next) => {
  if(err) {
    res.status(500).send("Something went wrong!");
  }
});

// this will match all the http method API calls to /test.
// app.use("/test", (req, res) => {
//   res.send("Hello from the Server!");
// });

app.listen(7777, () => {
  console.log("Server is sucessfully listening on port 7000...");
});
