const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isApprouved: { type: Boolean, default: false },
    isAdmin: { status: { type: Boolean } },
    isTeacher: { status: { type: Boolean } },
    isStudent: {
      status: { type: Boolean },
      level: { type: String },
      semester: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
