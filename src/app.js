const express = require("express");

const app = express();

//This will only handle to GET call to /user
app.get("/user", (req, res) => {
    res.send({firstName: "Humnashi", lastName: "Khan"});
})


// this will match all the http method API calls to /test.
app.use("/test", (req, res) => {
  res.send("Hello from the Server!");
});


app.listen(7777, () => {
  console.log("Server is sucessfully listening on port 7000...");
});
