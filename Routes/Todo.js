const express = require("express");
const router = express.Router();

router.get("/todo", (req, res) => {
  console.log("todo");
});

router.post("/todo", (req, res) => {
  console.log("todo added");
});

router.put("/todo:id", (req, res) => {
  console.log("todo updated");
});

router.delete("/todo:id", (req, res) => {
  console.log("Todo deleted ");
});

module.exports = router;
