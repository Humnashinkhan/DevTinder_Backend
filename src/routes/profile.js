const express = require("express");
const profileRouter = express.Router();
const { userAuth } = require("../middleware/auth");
const { validateEditProfileData } = require("../utils/validation");


profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    //validate my token.
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(400).send("ERROR:" + err.message);
  }
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
   try {
    if (!validateEditProfileData(req)) {
        throw new Error("Invalid Edit Request!!");
    }

    const loggedInUser = req.user;
    console.log(loggedInUser);

    Object.keys(req.body).forEach((keys) => (loggedInUser[key] = req.body[key]));
       console.log(loggedInUser);

       res.send("Your profile was Updated");
   }catch (err) {
    res.status(400).send("ERROR:" + err.message);
  }
})

module.exports = profileRouter;
