//require libraries
const express = require("express");
const router = require("express-promise-router")();

const Test = require("../controllers/test");

router.route("/gettests").get(Test.getall);

router.route("/addtest").post(Test.addTest);

router.route("/gettest/:_id").get(Test.gettest);

module.exports = router;
