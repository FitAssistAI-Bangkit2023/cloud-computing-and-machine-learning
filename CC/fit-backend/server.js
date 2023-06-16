const express = require("express");
const errorMiddleware = require("./middleware/errorMiddleware");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const cors = require("cors");

connectDb();
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/app', require("./routes/appRoutes"));
app.use('/user',  require("./routes/userRoutes"));
app.use(errorMiddleware);

app.get("/", (req, res) => {
    console.log("Response success")
    res.send("Response Success!")
})


app.listen(port, () => {
    console.log(`Server is up and listening on ${port}`);
});