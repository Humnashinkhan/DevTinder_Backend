const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://NamasteDev:ftdOTVoA8WWgu3YS@cluster0.7glgadx.mongodb.net/"
  );
};

module.exports = connectDB;

