const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  testName: {
    type: String,
    required: true
  },
  description: { type: String, required: true }
});

const Test = mongoose.model("test", testSchema);

module.exports = Test;
