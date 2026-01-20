const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Project 5 Test App – CI/CD Test Version)");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
