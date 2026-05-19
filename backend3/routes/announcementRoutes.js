const express = require("express");
const router = express.Router();

const {
  createAnnouncement,
  getAnnouncements,
  updateAnnouncement,
  deleteAnnouncement
} = require("../controllers/announcementController");

// Admin
router.post("/", createAnnouncement);
router.put("/:id", updateAnnouncement);
router.delete("/:id", deleteAnnouncement);

// User
router.get("/", getAnnouncements);

module.exports = router;
