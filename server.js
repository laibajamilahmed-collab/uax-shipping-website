const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// SAFE ROUTE LOADING (crash se bachata hai)
try {
  app.use("/api/users", require("./routes/userRoutes"));
} catch (err) {
  console.log("userRoutes error:", err.message);
}

try {
  app.use("/api/feedback", require("./routes/feedbackRoutes"));
} catch (err) {
  console.log("feedbackRoutes error:", err.message);
}


try {
  app.use("/api/form", require("./routes/formRoutes"));
} catch (err) {
  console.log("formRoutes error:", err.message);
}

try {
  app.use("/api/quote", require("./routes/quoteRoutes"));
} catch (err) {
  console.log("quoteRoutes error:", err.message);
}

try {
  app.use("/api/tracking", require("./routes/trackingRoutes"));
} catch (err) {
  console.log("trackingRoutes error:", err.message);
}

app.get("/", (req, res) => {
  res.send("API Running Successfully");
});

app.listen(5000, () => {
  console.log("Server Running On Port 5000");
});