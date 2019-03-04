module.exports = function(app) {
  //Handling Routes
  app.use("/user", require("../api/routes/users"));
  app.use("/test", require("../api/routes/test"));
  app.use("/invite", require("../api/routes/invite"));
  app.use("/score", require("../api/routes/score"));

  //Some error
  app.use((req, res, next) => {
    const error = new Error("404 NOT FOUND");
    error.status = 404;
    next(error);
  });
};
