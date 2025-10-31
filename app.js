const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello, GitHub Actions! TEst 2");
});
module.exports = app;