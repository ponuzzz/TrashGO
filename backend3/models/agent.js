const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({

  name: String,

  email: String,

  password: String,

  phone: String,

  district: String,

  role: {
    type: String,
    default: "agent"
  }

});

module.exports = mongoose.model("Agent", agentSchema);
