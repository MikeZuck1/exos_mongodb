const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
  }, {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;