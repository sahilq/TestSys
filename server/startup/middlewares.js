const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

module.exports = function(app) {
  //Middlewares
  app.use(cors());
  if (app.get("env") === "development") {
    console.log(`Morgan enabled`);
    app.use(morgan("dev")); //logger
  }
  app.use(express.json()); //body parser
};
