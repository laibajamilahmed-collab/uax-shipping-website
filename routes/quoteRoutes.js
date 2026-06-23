const express = require("express");
const router = express.Router();
const { submitQuote, getQuotes } = require("../controllers/quoteController");

// POST /api/quote
router.post("/", submitQuote);

// GET /api/quote
router.get("/", getQuotes);

module.exports = router;