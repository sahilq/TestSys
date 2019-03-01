//require libraries
const express = require("express");
const router = require("express-promise-router")();
const passport = require("passport");
require("../passport");

//require Controller
const Invite = require("../controllers/invite");

const passportJWT = passport.authenticate("jwt", { session: false });

router.route("/createinvite").post(passportJWT, Invite.createInvite);
router.route("/getinvites/:userId").get(passportJWT, Invite.getInvites);

module.exports = router;
