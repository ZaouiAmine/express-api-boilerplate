const mongoose = require("mongoose");

const moduleSchema = new mongoose.model(
  {
    name: { type: String, required: true },
    level: { type: String, required: true },
    semester: { type: String, required: true },
    staff: [
      {
        id: { type: String, required: true },
        role: { type: String, required: true },
      },
    ],
    grades: [
      {
        student_id: { type: String, required: true, unique: true },
        tdGrade: { type: Number, required: false },
        tpGrade: { type: Number, required: false },
        testGrade: { type: Number, required: false },
        examGrade: { type: Number, required: false },
      },
    ],
    complains: [
      {
        student_id: { type: String, required: true },
        message: { type: String, required: true },
      },
    ],
  },
  { timestampes: true }
);

module.exports = mongoose.model("Module", moduleSchema);
