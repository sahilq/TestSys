const mongoose = require("mongoose");

module.exports = function() {
  //using mongoose for database connection
  mongoose.connect("mongodb://localhost/TestSys", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "error connection"));
  db.once("open", () => {
    console.log("DB CONNECTED");
  });
};
