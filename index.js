const express = require("express");
const app = express();
const dotenv = require("dotenv").config(); // load environment variables from .env file
const morgan = require('morgan');
const mongoose = require("mongoose");

morgan('dev') // use morgan for logging requests

// define a simple schema
const userSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    isActive: Boolean,
    createdAt: { type: Date },
  },
  { timestamps: true } // automatically add createdAt and updatedAt fields
);

// model creation from the schema
const users = mongoose.model("users", userSchema);

const pageNumber = 2; // current page number
const pageSize = 5; // 5 elements (users) per page

mongoose
  .connect(`${process.env.DATABASE_MONGODB_URI}`, {})
  .then(() => {
    console.log("Connected to the DB ? ok !");
    users
      .find({
        age: { $gte: 20, $lte: 35 },
      })
      .sort({ name: 1 })
      .select("name age") // select only name and age fields
      .skip((pageNumber - 1) * pageSize) // skip the first (pageNumber - 1) * pageSize documents
      .limit(pageSize) // limit to 5 results to send
      .then((users) => {
        console.log("Our users:", users);
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
