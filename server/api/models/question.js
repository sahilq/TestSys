const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const queSchema = new Schema({
  // testId: { type: mongoose.Schema.Types.ObjectId, required: true },
  question: {
    type: String,
    required: true
  },
  answer: { type: String, required: true },
  option1: { type: String, required: true },
  option2: { type: String, required: true }
});

const Question = mongoose.model("question", queSchema);

module.exports = queSchema;
module.exports = Question;
