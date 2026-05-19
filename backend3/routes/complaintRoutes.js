// const router = require("express").Router();
// const auth = require("../middleware/authMiddleware");
// const admin = require("../middleware/adminMiddleware");

// const {
//   createComplaint,
//   getComplaints,
//   replyComplaint,
//   getMyComplaints,
//   updateComplaint,
//   deleteComplaint
// } = require("../controllers/complaintController");

// // 🟢 USER
// router.post("/", auth, createComplaint);
// router.get("/my", auth, getMyComplaints);
// router.put("/reply/:id", auth, admin, replyComplaint);

// router.delete("/:id", auth, deleteComplaint);

// // 🔴 ADMIN
// router.get("/", auth, admin, getComplaints);
// router.put("/:id", auth, admin, replyComplaint);

// module.exports = router;

// // 2-method
//  const router = require("express").Router();
//  const auth = require("../middleware/authMiddleware");
//  const admin = require("../middleware/adminMiddleware");

//  const {
//    createComplaint,
//    getComplaints,
//    replyComplaint,
//    getMyComplaints,
//    deleteComplaintAdmin
//  } = require("../controllers/complaintController");

//  // USER
//  router.post("/", auth, createComplaint);
//  router.get("/my", auth, getMyComplaints);

//  // ADMIN
//  router.get("/", auth, admin, getComplaints);
//  router.put("/reply/:id", auth, admin, replyComplaint);
//  router.delete("/:id", auth, admin, deleteComplaintAdmin);

//  module.exports = router;

const router = require("express").Router();

const {
  protect,
  isAdmin
} = require("../middleware/authMiddleware");

// const {
//   createComplaint,
//   getComplaints,
//   replyComplaint,
//   getMyComplaints,
//   deleteComplaintAdmin
// } = require("../controllers/complaintController");

const {
  createComplaint,
  getComplaints,
  replyComplaint,
  getMyComplaints,
  deleteComplaintAdmin,
  updateComplaint,
  deleteComplaint
} = require("../controllers/complaintController");

// USER
router.post(
  "/",
  protect,
  createComplaint
);

router.get(
  "/my",
  protect,
  getMyComplaints
);

// ADMIN
router.get(
  "/",
  protect,
  isAdmin,
  getComplaints
);

router.put(
  "/reply/:id",
  protect,
  isAdmin,
  replyComplaint
);

// router.delete(
//   "/:id",
//   protect,
//   isAdmin,
//   deleteComplaintAdmin
// );

// USER UPDATE COMPLAINT
router.put(
  "/:id",
  protect,
  updateComplaint
);

// USER DELETE COMPLAINT
router.delete(
  "/user/:id",
  protect,
  deleteComplaint
);
router.delete(
  "/:id",
  protect,
  isAdmin,
  deleteComplaintAdmin
);

module.exports = router;
