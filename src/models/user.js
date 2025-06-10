const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:  {
        type: String,
        required: true,
    },
    lastName:  {
        type: String
    },
    emailId:  {
        type: String,
        required: true,
        unique: true,
    },
    password:  {
        type: String,
        required: true,
    },
    
    age:  {
        type: Number,
        min: 18,
    },
    gender:  {
        type: String
    },
    photoUrl: {
        type: String,
        default: "https://www.pnrao.com/wp-content/uploads/2023/06/dummy-user-male.jpg",
    }
})

module.exports = mongoose.model("User", userSchema) ;