const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("Name is Not Valid!");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Email is Not Valid!");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Please Enter a Strong Password !");
  }
};

const validateEditProfileData = (req) => {
  const allowedEditFields = [
    "firstName",
    "lastName",
    "emailId",
    "photoURL",
    "about",
    "age",
    "gender",
    "skills",
  ];

  const isEditAllowed = Object.keys(req.body).every((field) => 
    allowedEditFields.includes(field)
  );
};

module.exports = {
  validateSignUpData,
  validateEditProfileData,
};
