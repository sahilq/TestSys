const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
//using mongoose for database connection
mongoose.connect("mongodb://localhost/TestSys", {
  useNewUrlParser: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "error connection"));
db.once("open", () => {
  console.log("DB CONNECTED");
});
const app = express(); //init express as app
//Middlewares
app.use(cors());
if (app.get("env") === "development") {
  console.log(`Morgan enabled`);
  app.use(morgan("dev")); //logger
}
app.use(express.json()); //body parser

//Handling Routes
app.use("/user", require("./api/routes/users"));

//setting port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
