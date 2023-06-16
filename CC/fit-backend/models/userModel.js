const mongoose = require("mongoose");

const userSchema  = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter your username"]
    },
    email: {
        type: String,
        required: [true, "please enter your email address"],
        unique: [true, "email address already used"]
    },
    password: {
        type: String,
        required: [true, "please enter your password"],
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("User", userSchema)