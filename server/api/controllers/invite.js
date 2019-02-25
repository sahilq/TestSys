//require Schema
const Invite = require("../models/invite");

module.exports = {
  createInvite: async (req, res, next) => {
    const { testId, participantId } = req.body;
    let invite = await new Invite({ testId, participantId });
    invite.save();
    res.status(200).json(invite);
  },
  getInvites: async (req, res, next) => {
    let invites = await Invite.find({ participantId: req.params.userId });

    res.status(200).json(invites);
  }
};
