const mongoose = require("mongoose");

const resultSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    username: {
        type: String,
    },
    type: {
        type:String,
    },
    times: {
        type: Number,
    },
    reps: {
        Number,
    },
    menit: {
        type: Number,
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Result", resultSchema)

