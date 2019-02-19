const Test = require("../models/test");

module.exports = {
  addTest: async (req, res, next) => {
    console.log(req.body);
    const { userId, testName, description } = req.body;
    const newTest = new Test({ userId, testName, description });
    const questions = req.body.questions;
    if (questions.length) {
      await questions.map(question => {
        newTest.questions.push(question);
      });
    }
    await newTest.save();
    res.json(newTest).status(200);
  },
  gettest: async (req, res, next) => {
    console.log(req.params);
    const test = await Test.findById(req.params._id);

    res.json(test).status(200);
  },
  getall: async (req, res, next) => {
    res.json(await Test.find()).status(201);
  }
};
