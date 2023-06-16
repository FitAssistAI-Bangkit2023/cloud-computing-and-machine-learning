const mongoose = require("mongoose");

const informationSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    username: {
        type: String,
    },
    age: {
        type: Number,
    },
    height: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    gender: {
        type: String
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Information", informationSchema)

