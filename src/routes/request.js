const express = require("express");
const requestRouter = express.Router();
const { userAuth } = require("../middleware/auth");

requestRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {
  const user = req.user;
  // Sending a COnnection Request.
  console.log("Sending a Connection Request!");
  res.send(user.firstName + "Send the Connectin Request !");
});

module.exports = requestRouter;
