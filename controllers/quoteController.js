const db = require("../config/db"); // your mysql connection/pool

// POST /api/quote
const submitQuote = (req, res) => {
  const {
    fullName,
    email,
    mobile,
    destinationFrom,
    destinationTo,
    shippingType,
    shippingDate,
    message,
  } = req.body;

  // Basic validation
  if (!fullName || !email || !mobile || !destinationFrom || !destinationTo) {
    return res.status(400).json({
      success: false,
      message: "Please fill all required fields.",
    });
  }

  const sql = `
    INSERT INTO quotes 
      (full_name, email, mobile, destination_from, destination_to, shipping_type, shipping_date, message) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    fullName,
    email,
    mobile,
    destinationFrom,
    destinationTo,
    shippingType || null,
    shippingDate || null,
    message || null,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting quote:", err);
      return res.status(500).json({
        success: false,
        message: "Server error. Please try again later.",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Quote submitted successfully!",
      quoteId: result.insertId,
    });
  });
};

// GET /api/quote (optional - fetch all quotes, e.g. for admin)
const getQuotes = (req, res) => {
  const sql = "SELECT * FROM quotes ORDER BY created_at DESC";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching quotes:", err);
      return res.status(500).json({
        success: false,
        message: "Server error. Please try again later.",
      });
    }

    return res.status(200).json({
      success: true,
      data: results,
    });
  });
};

module.exports = { submitQuote, getQuotes };