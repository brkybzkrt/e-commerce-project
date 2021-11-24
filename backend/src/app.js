const express = require("express");
const dotenv = require("dotenv");
const { connectToDB } = require("./loaders/db");
const{AuthRoute}=require("./routes/index")
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//mongoose connected
connectToDB();

//routes

const port = process.env.PORT || 5000;

app.use("/auth",AuthRoute)

app.listen(port, () => {
  console.log("listening on port :", port);
});
