const mongoose = require("mongoose");

const priceSchema = new mongoose.Schema({
  type: String,
  pricePerKg: Number,
});

module.exports = mongoose.model("Price", priceSchema);
