const mongoose = require("mongoose");

const wasteTypeSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    unique: true
  },
  pricePerKg: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("WasteType", wasteTypeSchema);
