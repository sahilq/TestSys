const Score = require("../models/score");
const Invite = require("../models/invite");

module.exports = {
  saveScore: async (req, res, next) => {
    const { total, score, participantId, testId } = req.body;
    const savedScore = await new Score({
      score,
      participantId,
      testId,
      total
    });
    savedScore.save();
    await Invite.findByIdAndRemove(req.body.inviteId);
    res.json(savedScore).status(201);
  },
  getAllScores: async (req, res, next) => {
    const scores = await Score.find()
      .populate("participantId", "name email")
      .populate("testId", "testName")
      .select("userName testName score total");

    res.json(scores).status(200);
  }
};
