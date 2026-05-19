

//  const router = require("express").Router();

//  const auth = require("../middleware/authMiddleware");
//  const admin = require("../middleware/adminMiddleware");
//  const upload = require("../middleware/uploads");


//  // ✅ NEW MIDDLEWARE
//  const {
//    protect,
//    isAdmin
//  } = require("../middleware/authMiddleware");



//  const {
//    createWaste,
//    getAllWaste,
//    updateStatus,
//    getMyWaste,
//    createOrder,
//    verifyPayment,
//    getPriceByType,
//    updateWaste,
//    deleteWaste,
//    adminPay
//  } = require("../controllers/wasteController");

//  // ================= USER =================
//  router.post("/", auth, upload.single("image"), createWaste);
//  router.get("/my", auth, getMyWaste);

//  // ================= PAYMENT =================
//  router.post("/create-order/:id", auth, createOrder);
//  router.post("/verify-payment", auth, verifyPayment);

// // // ================= PRICE =================
//  router.get("/price/:type", getPriceByType);

// // // ================= ADMIN =================
//  router.get("/", auth, admin, getAllWaste);

// // // // 🔥 FINAL FIXED ROUTE
//   //  router.put("/:id", auth, admin, updateStatus);
// // // //delete and edit
// //  router.put("/:id", auth, upload.single("image"), updateWaste);


// // // // USER EDIT
// // // router.put("/waste/:id", auth, updateWaste);

// // // // ADMIN STATUS UPDATE
// // // router.put("/waste/status/:id", auth, admin, updateStatus);

// // // USER EDIT
// router.put("/:id", auth, updateWaste);

// // // ADMIN STATUS UPDATE
// router.put("/status/:id", auth, admin, updateStatus);



// router.delete("/:id", auth, deleteWaste);

//  router.put("/admin-pay/:id", adminPay);


//  module.exports = router;



const router = require("express").Router();

const upload =
require("../middleware/uploads");

const {
  protect,
  isAdmin,
  isAgent
} = require("../middleware/authMiddleware");

const {

  createWaste,
  getAllWaste,
  updateStatus,
  getMyWaste,
  createOrder,
  verifyPayment,
  getPriceByType,
  updateWaste,
  deleteWaste,
  adminPay,
  markCollected

} = require("../controllers/wasteController");


// USER CREATE
router.post(
  "/",
  protect,
  upload.single("image"),
  createWaste
);

// USER GET MY
router.get(
  "/my",
  protect,
  getMyWaste
);

// PAYMENT
router.post(
  "/create-order/:id",
  protect,
  createOrder
);

router.post(
  "/verify-payment",
  protect,
  verifyPayment
);

// PRICE
router.get(
  "/price/:type",
  getPriceByType
);

// ADMIN GET ALL
router.get(
  "/",
  protect,
  isAdmin,
  getAllWaste
);

// ADMIN UPDATE STATUS
router.put(
  "/status/:id",
  protect,
  isAdmin,
  updateStatus
);

// USER EDIT
router.put(
  "/:id",
  protect,
  upload.single("image"),
  updateWaste
);

// USER DELETE
router.delete(
  "/:id",
  protect,
  deleteWaste
);

// ADMIN PAY
router.put(
  "/admin-pay/:id",
  protect,
  isAdmin,
  adminPay
);
router.put(
  "/collect/:id",
  protect,
  isAgent,
  markCollected
);
module.exports = router;
