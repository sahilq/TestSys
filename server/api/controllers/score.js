const Score = require("../models/score");
const Invite = require("../models/invite");

module.exports = {
  saveScore: async (req, res, next) => {
    const {
      total,
      score,
      userName,
      participantId,
      testName,
      testId
    } = req.body;
    const savedScore = await new Score({
      score,
      userName,
      participantId,
      testName,
      testId,
      total
    });
    savedScore.save();
    console.log(score, testId, userName, participantId, testName);
    console.log(req.body.inviteId);
    await Invite.findByIdAndRemove(req.body.inviteId);
    res.json(savedScore).status(201);
  },
  getAllScores: async (req, res, next) => {
    const scores = await Score.find().select("userName testName score total");
    res.json(scores).status(200);
  }
};
