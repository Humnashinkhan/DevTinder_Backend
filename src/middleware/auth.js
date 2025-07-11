const jwt = require("jsonwebtoken");
const User = require("../models/user");
const userAuth = async (req, res, next) => {
  // Read the token from the req cookies.
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).send("Please login!");
    }
    //Validate the token.

    const decodedObj = await jwt.verify(token, "DEV@Tinder$55");
    const { _id } = decodedObj;
    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User Not Exist!");
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("ERROR:" + err.message);
  }
  // Find the user.
};

module.exports = {
  userAuth,
};
