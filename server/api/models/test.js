const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { queSchema } = require("./question");

const testSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  testName: {
    type: String,
    required: true
  },
  description: { type: String, required: true },
  questions: { type: [queSchema], default: [] }
});

const Test = mongoose.model("test", testSchema);

module.exports = Test;
