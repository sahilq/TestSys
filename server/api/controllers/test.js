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
  },
  deleteTest: async (req, res, next) => {
    const test = await Test.findByIdAndDelete(req.params._id);
    res.json(test).status(200);
  },
  infoEdit: async (req, res, next) => {
    console.log(req.params._id);
    console.log(req.body);
    const test = await Test.findByIdAndUpdate(req.params._id, req.body, {
      new: true
    });
    res.status(200).json(test);
  }
};
