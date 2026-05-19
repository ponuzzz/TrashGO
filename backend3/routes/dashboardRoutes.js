// const router = require("express").Router();
// const auth = require("../middleware/authMiddleware");
// const admin = require("../middleware/adminMiddleware");

// const { getDashboard } = require("../controllers/dashboardController");

// router.get("/", auth, admin, getDashboard);
// //console.log("getDashboard:", getDashboard);
// module.exports = router;



// const router = require("express").Router();
// //  const auth = require("../middleware/authMiddleware");
// //  const admin = require("../middleware/adminMiddleware");


//  const dashboardController = require("../controllers/dashboardController");

//  router.get("/", auth, admin, dashboardController.getDashboard);

// // // console.log(auth);
// // // console.log(admin);
// // // console.log(dashboardController.getDashboard);
//  module.exports = router;



const express = require("express");
const router = express.Router();

const { getDashboard } = require("../controllers/dashboardController");

router.get("/dashboard", getDashboard);

module.exports = router;
