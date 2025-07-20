const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const dbURI =
      process.env.DATABASE_MONGODB_URI || "mongodb://localhost:27017/users";
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
