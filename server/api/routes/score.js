const express = require("express");
const router = require("express-promise-router")();

const Score = require("../controllers/score");

router.route("/savescore").post(Score.saveScore);

router.route("/getscores").get(Score.getAllScores);

module.exports = router;
