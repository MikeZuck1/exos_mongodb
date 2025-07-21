const dotenv = require("dotenv");
dotenv.config(); // Load environment variables

const express = require("express");
const app = express();
const connectDB = require("./config/database");
const morgan = require("morgan");
const userRoutes = require("./routes/index");
const usersRoutes = require("./routes/users");

// Connect to DB
connectDB()
  .then(() => {
    // Start server
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to DB, server not started:", err);
  });

// Middlewares
app.use(express.json()); // Parse JSON bodies
app.use(morgan("dev")); // HTTP request logger

// Routes
app.use("/", userRoutes);
app.use("/users", usersRoutes);

// Views config
app.set("views", "./views");
app.set("view engine", "pug");
