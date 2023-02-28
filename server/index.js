const express = require("express");
const env = require("dotenv");
env.config();

const app = express();
const port = process.env.PORT || 5002;

app.get("/test", (req, res) => {
  return res.status(200).json({
    message: "ok",
  });
});

app.listen(port, () => console.info("Server running on port " + port));
