const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inviteSchema = new Schema({
  participantId: { type: mongoose.Schema.Types.ObjectId, required: true },
  testId: { type: mongoose.Schema.Types.ObjectId, required: true },
  testName: { type: String, required: true },
  inviteCode: { type: String, required: true }
});

const Invite = mongoose.model("invite", inviteSchema);

module.exports = Invite;
