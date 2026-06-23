const express = require("express");
const router = express.Router();

const {
  saveForm,
  getForms,
} = require("../controllers/formController");

router.post("/", saveForm);
router.get("/", getForms);

module.exports = router;