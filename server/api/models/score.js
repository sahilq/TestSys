const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  participantId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "users"
  },
  userName: { type: String, required: true },
  testName: { type: String, required: true },
  score: { type: Number, required: true },
  total: { type: Number, required: true },
  testId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "tests" }
});

const Score = mongoose.model("score", scoreSchema);

module.exports = Score;
