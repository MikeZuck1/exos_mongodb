const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).render("index");
});

router.get("/user", (req, res) => {
  res.status(200).send("Welcome to the User Management API");
});

module.exports = router;