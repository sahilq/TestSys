const Test = require("../models/test");
const Question = require("../models/question");
module.exports = {
  addTest: async (req, res, next) => {
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
    const test = await Test.findOneAndUpdate(req.params._id, req.body, {
      new: true
    });
    res.status(200).json(test);
  },
  addQue: async (req, res, next) => {
    let test = await Test.findById(req.params._id);

    let question = new Question(req.body);
    test.questions.push(question);
    await test.save();
    res.json(test).status(200);
  },
  delQue: async (req, res, next) => {
    console.log("testId", req.params._id);
    console.log("que to delete ", req.body.id);
    const test = await Test.findById(req.params._id);
    console.log(
      test.questions.filter(que => {
        if (JSON.stringify(que._id) === JSON.stringify(req.body.id)) {
          test.questions.pull(que);
        }
      })
    );
    test.save();
    console.log(test);
    res.status(200).json(test);
  }
};
