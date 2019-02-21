//require libraries
const express = require("express");
const router = require("express-promise-router")();

//require Controller
const Invite = require("../controllers/invite");

router.route("/createinvite").post(Invite.createInvite);
router.route("/getinvites/:userId").get(Invite.getInvites);

module.exports = router;
