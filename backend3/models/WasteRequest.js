const mongoose = require("mongoose");

const wasteSchema = new mongoose.Schema(
{
  requestId: {
    type: String,
    unique: true,
  },

  // USER
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  // AGENT
  agent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  name: String,
  phone: String,
  district: String,
  place: String,
  landmark: String,

  wasteType: {
    type: String,
    required: true,
    enum: [
      "Plastic",
      "E-Waste",
      "Organic",
      "Recyclable",
      "Glass",
      "Metal",
      "Paper",
      "Rubber",
      "Textile",
      "Wood",
      "Battery Waste",
      "Aluminium",
      "Hazardous Waste",
      "Food Waste"
    ]
  },

  weight: Number,

  price: Number,

  status: {
    type: String,
    enum: [
      "Pending",
      "Approved",
      "Assigned",
      "Collected",
      "Completed"
    ],
    default: "Pending",
  },

  paidBy: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER"
  },

  paymentStatus: {
    type: String,
    enum: ["Not Paid", "Paid"],
    default: "Not Paid"
  },

  paidAt: Date,

  adminPaidAt: Date,

  address: String,

  image: String,

  pickupDate: String,

  pickupTime: String,

},
{ timestamps: true }
);

module.exports =
mongoose.model("Waste", wasteSchema);
