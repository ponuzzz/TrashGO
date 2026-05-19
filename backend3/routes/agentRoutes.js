//  const router = require("express").Router();
//  const auth = require("../middleware/authMiddleware");
//  const agent = require("../middleware/agentMiddleware");

//  const {
//     getAssignedWork,
//     updateToCollected,
//   } = require("../controllers/agentController");

// // // // Agent APIs
//   router.get("/", auth, agent, getAssignedWork);
//   router.put("/:id", auth, agent, updateToCollected);

// // // module.exports = router;

// // // const express = require("express");

// // const router = express.Router();

// // const auth =
// // require("../middleware/authMiddleware");

// // const agent =
// // require("../middleware/agentMiddleware");

// // const {
// //   getAssignedWork,
// //   updateToCollected
// // } = require("../controllers/agentController");


// // // GET ASSIGNED WORK
// // router.get(
// //   "/work",
// //   auth,
// //   agent,
// //   getAssignedWork
// // );


// // // MARK COLLECTED
// // router.put(
// //   "/collect/:id",
// //   auth,
// //   agent,
// //   updateToCollected
// // );

// // module.exports = router;


// const express = require("express");

//  const router = express.Router();

//  const {
//    agentWork,
//    collectWaste
//  } = require("../controllers/agentController");

//  const {
//    protect,
//    isAgent
// } = require("../middleware/authMiddleware");

// // // ✅ GET AGENT REQUESTS
//  router.get(
//    "/work",
//    protect,
//    isAgent,
//    agentWork
//  );

// // // ✅ MARK COLLECTED
//  router.put(
//    "/collect/:id",
//    protect,
//    isAgent,
//    collectWaste
//  );

//  module.exports = router;

const express = require("express");

const router = express.Router();

const {
  protect,
  isAgent
} = require("../middleware/authMiddleware");

const {
  getAssignedWork,
  updateToCollected,
    getAllAgents,
     getPickupAgents,
     getAgentHistory,
      updateAgent,
  deleteAgent,
} = require("../controllers/agentController");


// ================= AGENT WORK =================
router.get(
  "/work",
  protect,
  isAgent,
  getAssignedWork
);


// ================= COLLECT =================
router.put(
  "/collect/:id",
  protect,
  isAgent,
  updateToCollected
);

router.get(
  "/all",
  getAllAgents
);


router.get(
  "/pickup-agents",
  getPickupAgents
);
router.get("/history", protect, isAgent, getAgentHistory);

// ================= UPDATE AGENT =================
router.put(
  "/:id",
  updateAgent
);

// ================= DELETE AGENT =================
router.delete(
  "/:id",
  deleteAgent
);


module.exports = router;
