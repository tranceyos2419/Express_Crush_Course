// middleware can add something to req object in express
// middlewares are functions which can access to request and response object
const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, console.log(`express is listening port ${PORT}`));
