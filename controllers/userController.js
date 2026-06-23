const db = require("../config/db");

// REGISTER
exports.register = (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    password,
    confirmPassword
  } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({
      message: "Passwords do not match"
    });
  }

  const sql = `
  INSERT INTO users
  (first_name,last_name,email,phone,password)
  VALUES (?,?,?,?,?)
  `;

  db.query(
    sql,
    [firstName, lastName, email, phone, password],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        success: true,
        message: "Registration Successful"
      });
    }
  );
};

// LOGIN
exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email=? AND password=?",
    [email, password],
    (err, result) => {
      if (err) return res.status(500).json(err);

      if (result.length > 0) {
        res.json({
          success: true,
          message: "Login Successful"
        });
      } else {
        res.json({
          success: false,
          message: "Invalid Email or Password"
        });
      }
    }
  );
};