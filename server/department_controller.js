const express = require("express");
const router = express.Router();
const Department = require("./department");

router.post("/", (req, res) => {
  console.log(req.body);
  let d = new Department({ name: req.body.name });
  d.save((err, dep) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(dep);
    }
  });
});

router.get("/", (req, res) => {
  Department.find().exec((err, deps) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(deps);
    }
  });
});

module.exports = router;
