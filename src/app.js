const express = require("express");

const app = express();

//This will only handle to GET call to /user
app.use("/user", (req, res, next) => {
  console.log("Handling the routr user!!");
   //res.send("Response 1");
   next();
}, 
 (req, res) => {
  console.log("Handling the routr user!!");
  res.send("Response 2");
}
);

// this will match all the http method API calls to /test.
app.use("/test", (req, res) => {
  res.send("Hello from the Server!");
});

app.listen(7777, () => {
  console.log("Server is sucessfully listening on port 7000...");
});
