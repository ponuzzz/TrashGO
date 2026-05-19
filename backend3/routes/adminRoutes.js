// const {
//   getAgents
// } = require("../controllers/adminController");

//  router.get("/agents", getAgents);
// //  router.get("/agents", auth, admin, getAgents);

// router.put(
//   "/assign/:id",
//   auth,
//   admin,
//   assignAgent
// );
// module.exports = router;

const express = require("express");

const router = express.Router();

const {
  getAgents,
  assignAgent
} = require("../controllers/adminController");

const {
  protect,
  isAdmin
} = require("../middleware/authMiddleware");

// GET AGENTS
router.get(
  "/agents",
  protect,
  isAdmin,
  getAgents
);

// ASSIGN AGENT
router.put(
  "/assign/:id",
  protect,
  isAdmin,
  assignAgent
);

module.exports = router;
