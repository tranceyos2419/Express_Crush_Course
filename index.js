const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

//* initialize middleware
// set static website
//! if you want to make a dynamic website, you use template engines or front-end framework
app.use(express.static(path.join(__dirname, "public")));
app.use(logger);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, console.log(`express is listening port ${PORT}`));
