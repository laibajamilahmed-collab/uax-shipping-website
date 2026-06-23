const db = require("../config/db");

exports.trackShipment = (req, res) => {
  const { trackingId } = req.params;

  const sql =
    "SELECT * FROM tracking_shipments WHERE tracking_id = ?";

  db.query(sql, [trackingId], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Tracking ID not found",
      });
    }

    res.json({
      success: true,
      shipment: result[0],
    });
  });
};