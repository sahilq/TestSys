//require Schema
const Invite = require("../models/invite");

module.exports = {
  createInvite: async (req, res, next) => {
    const { testId, participantId, testName } = req.body;
    console.log(req.body);
    let invite = await new Invite({ testId, participantId, testName });
    await invite.save();
    let invites = await Invite.find({ participantId: participantId });
    console.log(invites);
    res.json(invites).status(200);
  },
  getInvites: async (req, res, next) => {
    let invites = await Invite.find({ participantId: req.params.userId });

    res.json(invites).status(200);
  }
};
