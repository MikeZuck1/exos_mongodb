const express = require("express");
const app = express();
const dotenv = require("dotenv").config(); // load environment variables from .env file
const morgan = require('morgan');
const mongoose = require("mongoose");

// define a simple schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  isActive: Boolean,
  date: { type: Date },
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
      .sort({ date: - 1 }) // sort by date in descending order
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

app.listen(3000, () => {
  console.log("Server is working on port 3000");
});
