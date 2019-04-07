//!  middleware is function which can access to request and response object
const fs = require("fs");
const path = require("path");

const logger = (req, res, next) => {
  const filePath = path.join(__dirname, "../data/", "log.txt");
  const log = `${req.protocol}://${req.get("host")}${req.originalUrl}\n`;
  fs.appendFile(filePath, log, err => {
    console.log("middleware");
    if (err) {
      req.error = err;
    }
    next();
  });
};

module.exports = logger;
