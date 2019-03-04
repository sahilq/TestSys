const express = require("express");

//database connection
require("./startup/db")();

//init express as app
const app = express();

//Middlewares
require("./startup/middlewares")(app);

//handling routes
require("./startup/routes")(app);

//setting port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
