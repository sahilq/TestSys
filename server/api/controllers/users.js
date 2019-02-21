const JWT = require("jsonwebtoken");

const User = require("../models/users");
const { JWT_SECRET } = require("../config/index");

//creating token
signtoken = newUser => {
  return JWT.sign(
    {
      sub: newUser._id,
      iat: new Date().getTime(),
      iss: 18
    },
    JWT_SECRET,
    { expiresIn: "1h" }
  );
};
//export function
module.exports = {
  signUp: async (req, res, next) => {
    const { email, password, name, role } = req.value.body;

    //check if email available
    const foundUser = await User.findOne({ email: email });
    if (foundUser) {
      return res.status(401).json({ error: "AUTH ERROR" });
    }
    //add user and save
    const newUser = new User({ email, password, name, role });
    await newUser.save();

    //generate web token
    const token = signtoken(newUser);
    const user = {
      email: newUser.email,
      id: newUser._id,
      name: newUser.name,
      role: newUser.role
    };
    //respond with token
    res.status(200).json({ token, user });
  },
  signIn: async (req, res, next) => {
    //generate web token
    const token = signtoken(req.user);
    //fetch user id
    const user = {
      email: req.user.email,
      id: req.user._id,
      name: req.user.name,
      role: req.user.role
    };
    //respond with token and user details
    res.status(200).json({ token, user });
  }, //random protected resource for testing
  secret: async (req, res, next) => {
    console.log(`User.secret() called`);
    res.json({ message: "IN USERS SECRET" }).status(201);
  },
  test: async (req, res, next) => {
    console.log("user controller test");
    console.log(req.body);
  },
  getAll: async (req, res, next) => {
    const users = await User.find();
    res.json(users).status(201);
  },
  getParts: async (req, res, next) => {
    const users = await User.find({ role: "participant" });
    res.json(users).status(201);
  }
};
