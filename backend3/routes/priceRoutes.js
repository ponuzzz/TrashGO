// const router = require("express").Router();
// const auth = require("../middleware/authMiddleware");
// const admin = require("../middleware/adminMiddleware");

// const { setPrice, getPrices } = require("../controllers/priceController");

// // Admin
// router.post("/", auth, admin, setPrice);

// // Public (or admin)
// router.get("/", getPrices);

// module.exports = router;

const express = require("express");

const router = express.Router();

const {
  setPrice,
  getPrices
} = require("../controllers/priceController");

const {
  protect,
  isAdmin
} = require("../middleware/authMiddleware");


// ADMIN SET PRICE
router.post(
  "/",
  protect,
  isAdmin,
  setPrice
);


// GET ALL PRICES
router.get(
  "/",
  getPrices
);

module.exports = router;
