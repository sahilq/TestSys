//require libraries
const express = require("express");
const router = require("express-promise-router")();

const Test = require("../controllers/test");

router.route("/gettests").get(Test.getall);

router.route("/addtest").post(Test.addTest);

router.route("/deletetest/:_id").delete(Test.deleteTest);

router.route("/gettest/:_id").get(Test.gettest);
router.route("/gettest/:_id").patch(Test.infoEdit);

router.route("/addque/:_id").patch(Test.addQue);

router.route("/deleteque/:_id").patch(Test.delQue);

module.exports = router;
