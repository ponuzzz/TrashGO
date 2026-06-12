const Price = require("../models/price");

// 🔴 ADMIN: Add / Update price
exports.setPrice = async (req, res) => {
  try {
    const { type, pricePerKg } = req.body;

    const data = await Price.findOneAndUpdate(
      { type },
      { pricePerKg },
      { upsert: true, new: true }
    );

    res.json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// 🟢 GET: All prices
exports.getPrices = async (req, res) => {
  try {
    const data = await Price.find();
    res.json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
