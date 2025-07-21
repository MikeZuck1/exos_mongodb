require("dotenv").config();

module.exports = (req, res, next) => {
  const token = req.header("Authorization");
  if (token === process.env.AUTH_TOKEN) {
    next();
  } else {
    res.status(401).send("Unauthorized or invalid..");
  }
};
