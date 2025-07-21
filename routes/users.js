const express = require("express");
const router = express.Router();
const Users = require("../models/User");

router.get("/user", async (req, res) => {
  try {
    const users = await Users.find({});
    console.log("Users retrieved:", users);
    res.status(200).render("users", { users });
  } catch (err) {
    res.status(500).send("server error (internal error).");
  }
});

module.exports = router;
