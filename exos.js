const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");

// morgan middleware
app.use(morgan("dev"));

// setup the pug engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname), "views");

app.get("/", (req, res) => {
  res.status(200).send("Hello World !");
});

const childSchema = new mongoose.Schema({ name: String }, { _id: false }); // don't use an id for child schema

const parentSchema = new mongoose.Schema({
  children: [childSchema],
  child: childSchema,
});

app.listen(3000);
