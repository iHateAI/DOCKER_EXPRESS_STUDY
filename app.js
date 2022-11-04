const express = require("express");

const app = express();

const port = 8080;
const host = "0.0.0.0";

app.get("/", (req, res) => {
  res.send("도커 공부하기");
});

app.listen(port, host, () => {
  console.log(`http://${host}:${port}`);
});
