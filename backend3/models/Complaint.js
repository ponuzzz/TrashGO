const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    message: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["user", "agent"],
      default: "user"
    },
    

    reply: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["Pending", "Replied"],
      default: "Pending",
    },

    repliedAt: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Complaint", complaintSchema);
