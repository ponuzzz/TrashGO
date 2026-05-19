const User = require("../models/User");
const Waste = require("../models/WasteRequest");

exports.getDashboard = async (req, res) => {
  try {
    // 👥 USERS
    const totalUsers = await User.countDocuments();

    // ♻ REQUESTS
    const totalRequests = await Waste.countDocuments();

    // 💰 REVENUE (ONLY PAID)
    const revenueData = await Waste.aggregate([
      { $match: { paymentStatus: "Paid" } },
      {
        $group: {
          _id: null,
          total: { $sum: "$price" },
        },
      },
    ]);

    const revenue = revenueData[0]?.total || 0;

    // 📊 SIMPLE CHART (LAST REQUESTS)
    const chart = await Waste.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select("price createdAt");

    res.json({
      totalUsers,
      totalRequests,
      revenue,
      chart,
    });

  } catch (err) {
    res.status(500).json(err.message);
  }
};
const Agent = require("../models/Agent");

// exports.getAgents = async (req, res) => {

//   const agents = await Agent.find();

//   res.json(agents);
// };

exports.getAgents = async (req, res) => {

  try {

    const agents =
    await User.find({
      role: "agent"
    });

    res.json(agents);

  } catch (err) {

    res.status(500).json(err.message);

  }

};

exports.assignAgent = async (req, res) => {

  const waste = await Waste.findByIdAndUpdate(
    req.params.id,
    {
      agent: req.body.agentId,
      status: "Assigned"
    },
    { new: true }
  );

  res.json(waste);
};
