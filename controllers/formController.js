exports.saveForm = (req, res) => {
  try {
    const data = req.body;

    console.log("Incoming data:", data);

    const sql = `
      INSERT INTO form_entries (
        company_Name, contact, city, email,
        destination_Company, destination_City,
        packaging_Type, weight,
        pickup_Choice, delivery_Details,
        card_Type, card_Number, agree
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [
      data.company_Name || "",
      data.contact || "",
      data.city || "",
      data.email || "",
      data.destination_Company || "",
      data.destination_City || "",
      data.packaging_Type || "",
      data.weight || "",
      data.pickup_Choice || "",
      data.delivery_Details || "",
      data.card_Type || "",
      data.card_Number || "",
      data.agree ? 1 : 0
    ], (err, result) => {
      if (err) {
        console.log("DB ERROR:", err);
        return res.status(500).json({ message: "Database error", error: err });
      }

      res.json({
        message: "Form saved successfully",
        id: result.insertId
      });
    });

  } catch (error) {
    console.log("SERVER ERROR:", error);
    res.status(500).json({ message: "Server error", error });
  }
};