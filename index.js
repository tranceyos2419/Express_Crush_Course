const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

const logger = require("./middleware/logger");
const app = express();
const PORT = process.env.PORT || 5000;

//* initialize middleware
// set static website
//! if you want to make a dynamic website, you use template engines or front-end framework
// app.use(express.static(path.join(__dirname, "public")));

// view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// my middleware
app.use(logger);

// body parser
app.use(express.json()); // json
app.use(express.urlencoded({ extended: true })); // form-submission

//* route
// handlebars
app.use("/", require("./routes/handlebar/handlebar"));

// api
app.use("/api/members", require("./routes/api/r-a-members.js"));

app.listen(PORT, console.log(`express is listening port ${PORT}`));
