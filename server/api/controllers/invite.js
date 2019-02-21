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
    console.log(req.params);
    let invites = await Invite.find({ participantId: req.params.userId });
    await console.log("invites", invites);

    res.status(200).json(invites);
  }
};
