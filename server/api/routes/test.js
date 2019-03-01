//require libraries
const express = require("express");
const router = require("express-promise-router")();
const passport = require("passport");
require("../passport");

const Test = require("../controllers/test");

const passportJWT = passport.authenticate("jwt", { session: false });

router.route("/gettests/:userId").get(passportJWT, Test.getall);

router.route("/addtest").post(passportJWT, Test.addTest);

router.route("/deletetest/:_id").delete(passportJWT, Test.deleteTest);

router.route("/gettest/:_id").get(passportJWT, Test.gettest);
router.route("/gettest/:_id").patch(passportJWT, Test.infoEdit);

router.route("/addque/:_id").patch(passportJWT, Test.addQue);

router.route("/deleteque/:_id").patch(passportJWT, Test.delQue);
router.route("/editque/:_id").patch(passportJWT, Test.editQue);

module.exports = router;
