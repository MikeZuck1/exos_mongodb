const express = require("express");
const app = express();
const path = require("path");
// load environment variables from .env file
const dotenv = require("dotenv").config();
// logging middleware
const morgan = require("morgan");
// connect to database
const mongoose = require("mongoose");

// middleware for logging requests
app.use(morgan("dev")); // use morgan for logging requests
// set the view engine to pug
app.set("view engine", "pug"); // set pug as the view engine
app.set("views", path.join(__dirname, "views")); // set the views directory

app.get("/", (req, res) => {
  res.status(200).render("app");
});

// define a simple schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  isActive: Boolean,
  createdAt: { type: Date },
});

// create a model from the schema
const human = mongoose.model("human", userSchema, "human");

const max = 10;

// connect to MongoDB
mongoose
  .connect(process.env.DATABASE_MONGODB_URI, {})
  .then(() => {
    console.log("Connected to the DB ? ok !");
    human
      .find({})
      .sort({ date: -1 }) // sort by date in descending order
      .limit(max) // limit to 10 results
      .select("name age date")
      .then((human) => {
        console.log("Our users:", human);
      })
      .catch((err) => {
        console.error("K.O : Error fetching collections -- ", err);
      });
  })
  .catch((err) => {
    console.error("K.O : Error connecting to the DB -- ", err);
  });

app.listen(3000);
