const mongoose = require("mongoose");

const pvSchema = new mongoose.Schema(
  {
    link: { type: String, required: true },
    complains: [
      {
        student_id: { type: String, required: true },
        message: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pv", pvSchema);
