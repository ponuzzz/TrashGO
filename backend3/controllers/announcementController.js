const Announcement = require("../models/Announcement");

// ➕ CREATE
exports.createAnnouncement = async (req, res) => {
  try {
    const { title, message } = req.body;

    const data = await Announcement.create({ title, message });
    res.json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// 📥 GET ALL (for users)
exports.getAnnouncements = async (req, res) => {
  try {
    const data = await Announcement.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// ✏ UPDATE
exports.updateAnnouncement = async (req, res) => {
  try {
    const data = await Announcement.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// ❌ DELETE
exports.deleteAnnouncement = async (req, res) => {
  try {
    await Announcement.findByIdAndDelete(req.params.id);
    res.json("Deleted");
  } catch (err) {
    res.status(500).json(err.message);
  }
};
