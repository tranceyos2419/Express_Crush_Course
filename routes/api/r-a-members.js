const express = require("express");
const _ = require("lodash");
const uuid = require("uuid");
const router = express.Router();
const members = require("../../data/Members");

//* api
// get
router.get("/", (req, res) => {
  res.json(members);
});

// post
router.post("/", (req, res) => {
  const { name, age } = req.body;
  // error checking
  if (!name || !age) {
    throw new Error("form is not filled");
  }
  const new_member = { id: uuid.v4(), name, age };
  members.push(new_member);
  // res.json(members);
  res.redirect("/");
});

// put
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  const found = members.some(member => member.id === id);
  if (found) {
    members.forEach(member => {
      if (member.id === id) {
        if (name && member.name !== name) {
          member.name = name;
        }
        if (age && member.age !== age) {
          member.age = age;
        }
      }
    });
    res.json(members);
  } else {
    res.status(404).send("member is not found");
  }
});

// delete
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const found = members.some(member => member.id === id);
  if (!found) {
    throw new Error("user is not found");
  }
  _.remove(members, member => {
    return member.id === id;
  });
  res.json(members);
});

module.exports = router;
