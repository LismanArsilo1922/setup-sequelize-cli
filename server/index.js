const express = require("express");
const env = require("dotenv");
const { sequelize } = require("./models");
const routers = require("./routers");
env.config();

const app = express();
const port = process.env.PORT || 5002;

app.use(express.json());

app.get("/test", (req, res) => {
  return res.status(200).json({
    message: "ok",
  });
});

Object.keys(routers).map((val, key) => {
  app.use(process.env.PATH_API + "/", routers[val]);
});

// Handle Error
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something bad wrong !!!";
  return res.status(errorStatus).json({
    status: false,
    message: errorMessage,
    stack: err.stack,
  });
});

// Handle url not found
app.all("*", (req, res) => {
  return res.status(500).json({
    status: false,
    message: "Server Error",
    stack: req.originalUrl + " URL Not Found",
  });
});

sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Connection to the database has been established successfully."
    );
    app.listen(port, () => {
      console.log("Server is running on port " + port);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
