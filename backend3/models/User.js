

// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//   {
//     name: String,

//     email: { 
//       type: String, 
//       unique: true 
//     },

//     password: String,

//     role: {
//       type: String,
//       enum: ["user", "admin", "agent"],
//       default: "user",
//     },

//     isBlocked: {
//       type: Boolean,
//       default: false,
//     },

//     // ✅ ADD THESE 2 FIELDS 👇
//     resetToken: {
//       type: String,
//     },

//     resetTokenExpiry: {
//       type: Date,
//     },

//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("User", userSchema);

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(

{

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  role: {

    type: String,

    enum: ["user", "admin", "agent"],

    default: "user",

  },

  // ===== AGENT DETAILS =====

  address: {
    type: String,
    default: "",
  },

  district: {
    type: String,
    default: "",
  },

  phone: {
    type: String,
    default: "",
  },

  idNumber: {
    type: String,
    default: "",
  },

  // =========================

  isBlocked: {

    type: Boolean,

    default: false,

  },

  resetToken: {
    type: String,
  },

  resetTokenExpiry: {
    type: Date,
  },

},

{ timestamps: true }

);

module.exports =
mongoose.model("User", userSchema);
