const db = require("../config/db");

exports.submitFeedback = (req, res) => {
  const {
    fullName,
    company,
    email,
    phone,
    message
  } = req.body;

  const sql = `
    INSERT INTO feedback
    (full_name, company, email, phone, message)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [fullName, company, email, phone, message],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Database Error"
        });
      }

      res.status(201).json({
        success: true,
        message: "Feedback Submitted Successfully"
      });
    }
  );
};