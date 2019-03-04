const Test = require("../models/test"); //Test schema
const Question = require("../models/question"); //question schema
module.exports = {
  //function to add test
  addTest: async (req, res, next) => {
    if (req.user.role !== "recruiter") {
      return res.send(403);
    }
    const { userId, testName, description } = req.body;
    const newTest = new Test({ userId, testName, description });
    const questions = req.body.questions;
    if (questions.length) {
      await questions.map(question => {
        newTest.questions.push(question);
      });
    }
    await newTest.save();
    res.json(newTest).status(201);
  },
  //get test can be accessed by both recruiter and participants
  gettest: async (req, res, next) => {
    const test = await Test.findById(req.params._id);

    res.json(test).status(200);
  },
  //fetch all tests only recruiter access
  getall: async (req, res, next) => {
    if (req.user.role !== "recruiter") {
      return res.send(403);
    }
    try {
      const tests = await Test.find(req.params);
      res.json(tests).status(200);
    } catch (CastError) {
      res.json({ message: "Cast Error" }).status(300);
    }
  },
  //only recruiter can delete tests else send 403 forbidden
  deleteTest: async (req, res, next) => {
    if (req.user.role !== "recruiter") {
      return res.send(403);
    }
    const test = await Test.findByIdAndDelete(req.params._id);
    res.json(test).status(200);
  },
  //only recruiter can edit tests else send 403 forbidden

  infoEdit: async (req, res, next) => {
    if (req.user.role !== "recruiter") {
      return res.send(403);
    }
    const test = await Test.findOneAndUpdate(req.params._id, req.body, {
      new: true
    });
    res.status(200).json(test);
  },
  //only recruiter can add que else send 403 forbidden

  addQue: async (req, res, next) => {
    if (req.user.role !== "recruiter") {
      return res.send(403);
    }
    let test = await Test.findById(req.params._id);

    let question = new Question(req.body);
    test.questions.push(question);
    await test.save();
    res.json(test).status(201);
  },
  //only recruiter can del que else send 403 forbidden

  delQue: async (req, res, next) => {
    if (req.user.role !== "recruiter") {
      return res.send(403);
    }
    const test = await Test.findById(req.params._id);

    test.questions.filter(que => {
      if (JSON.stringify(que._id) === JSON.stringify(req.body.id)) {
        test.questions.pull(que);
      }
    });
    test.save();

    res.status(200).json(test);
  },
  //only recruiter can edit que else send 403 forbidden

  editQue: async (req, res, next) => {
    if (req.user.role !== "recruiter") {
      return res.send(403);
    }
    const test = await Test.findById(req.params._id);
    let newQue = new Question(req.body.question);
    test.questions.filter(que => {
      if (JSON.stringify(que._id) === JSON.stringify(req.body.id)) {
        test.questions.pull(que);
      }
    });
    test.questions.push(newQue);
    await test.save();
    res.json(test).status(200);
  }
};
