const express = require("express");
const dotenv = require("dotenv");
const { connectToDB } = require("./loaders/db");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//mongoose connected
connectToDB();

//routes

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("listening on port :", port);
});
