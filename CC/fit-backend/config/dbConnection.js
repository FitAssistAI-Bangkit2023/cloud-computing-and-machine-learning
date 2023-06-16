const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECT_DB);
        console.log("Database connected: ", connect.connection.host);
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDb