const express = require("express");
const router = express.Router();
const members = require("../../data/Members");

router.get("/", (req, res) => {
  res.render("home", {
    title: "Members",
    members
  });
});

module.exports = router;
