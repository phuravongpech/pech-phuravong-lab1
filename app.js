import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, GitHub Actions! 2");
});

export default app;