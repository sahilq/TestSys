const JWT = require("jsonwebtoken");

//require Schema
const Invite = require("../models/invite");

//creating token for invite code
signtoken = id => {
  return JWT.sign(
    {
      sub: id,
      iat: new Date().getTime(),
      iss: 18
    },
    "INVITE_CODE_SECRET"
  );
};

module.exports = {
  createInvite: async (req, res, next) => {
    let date = new Date(req.body.date);

    const { testId, participantId, testName, time } = req.body;
    let inviteCode = await signtoken(participantId);

    let invite = await new Invite({
      testId,
      time,
      date,
      participantId,
      testName,
      inviteCode
    });
    await invite.save();
    let invites = await Invite.find({ participantId: participantId });
    console.log(invites);
    res.json(invites).status(201);
  },
  getInvites: async (req, res, next) => {
    let invites = await Invite.find({ participantId: req.params.userId });

    res.json(invites).status(200);
  }
};
