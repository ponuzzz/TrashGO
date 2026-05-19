
// const User = require("../models/User");
// const Waste = require("../models/WasteRequest");

// const getDashboard = async (req, res) => {
//   try {
//     const totalUsers = await User.countDocuments();
//     const totalWaste = await Waste.countDocuments();

//     const pending = await Waste.countDocuments({ status: "Pending" });
//     const completed = await Waste.countDocuments({ status: "Completed" });

//     // ✅ NEW: Paid count
//     const paid = await Waste.countDocuments({ paymentStatus: "Paid" });

//     // ✅ NEW: Revenue
//     const revenueData = await Waste.aggregate([
//       { $match: { paymentStatus: "Paid" } },
//       { $group: { _id: null, total: { $sum: "$price" } } }
//     ]);

//     const revenue = revenueData.length > 0 ? revenueData[0].total : 0;

//     res.json({
//       totalUsers,
//       totalWaste,
//       pending,
//       completed,
//       paid,       // ✅ NEW
//       revenue     // ✅ NEW
//     });

//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// };

// module.exports = { getDashboard };

// const User = require("../models/User");
// const Waste = require("../models/WasteRequest");



// const User = require("../models/User");
// const Waste = require("../models/WasteRequest");

// const getDashboard = async (req, res) => {
//   try {

//     // TOTAL USERS
//     const totalUsers = await User.countDocuments();

//     // TOTAL REQUESTS
//     const totalRequests = await Waste.countDocuments();

//     // PENDING
//     const pending = await Waste.countDocuments({
//       status: "Pending",
//     });

//     // COMPLETED
//     const completed = await Waste.countDocuments({
//       status: "Completed",
//     });

//     // PAID
//     const paid = await Waste.countDocuments({
//       paymentStatus: "Paid",
//     });

//     // REVENUE
//     const revenueData = await Waste.aggregate([
//       {
//         $match: {
//           paymentStatus: "Paid",
//         },
//       },
//       {
//         $group: {
//           _id: null,
//           total: {
//             $sum: "$price",
//           },
//         },
//       },
//     ]);

//     const revenue =
//       revenueData.length > 0
//         ? revenueData[0].total
//         : 0;

// //     // CHART DATA
// //     const chart = await Waste.find({
// //       paymentStatus: "Paid",
// //     })
// //       .sort({ createdAt: -1 })
// //       .limit(7);

// //     res.json({
// //       totalUsers,
// //       totalRequests,
// //       pending,
// //       completed,
// //       paid,
// //       revenue,
// //       chart,
// //     });

// //   } catch (err) {
// //     res.status(500).json({
// //       message: err.message,
// //     });
// //   }
// // };
// const chart = await Waste.aggregate([
//   {
//     $match: { paymentStatus: "Paid" }
//   },
//   {
//     $group: {
//       _id: {
//         $dateToString: { format: "%Y-%m-%d", date: "$createdAt" }
//       },
//       price: { $sum: "$price" }
//     }
//   },
//   {
//     $sort: { _id: 1 }
//   },
//   {
//     $limit: 7
//   }
// ]);
  

// module.exports = { getDashboard };

// const getDashboard = async (req, res) => {
//   try {

//     const totalUsers = await User.countDocuments();
//     const totalRequests = await Waste.countDocuments();

//     const pending = await Waste.countDocuments({
//       status: { $regex: /^pending$/i }
//     });

//     const completed = await Waste.countDocuments({
//       status: { $regex: /^completed$/i }
//     });

//     const paid = await Waste.countDocuments({
//       paymentStatus: "Paid"
//     });

//     const revenueData = await Waste.aggregate([
//       {
//         $match: { paymentStatus: "Paid" }
//       },
//       {
//         $group: {
//           _id: null,
//           total: { $sum: "$price" }
//         }
//       }
//     ]);

//     const revenue = revenueData[0]?.total || 0;

//     const chart = await Waste.aggregate([
//       {
//         $match: { paymentStatus: "Paid" }
//       },
//       {
//         $group: {
//           _id: {
//             $dateToString: {
//               format: "%Y-%m-%d",
//               date: "$createdAt"
//             }
//           },
//           price: { $sum: "$price" }
//         }
//       },
//       { $sort: { _id: 1 } },
//       { $limit: 7 }
//     ]);

//     res.json({
//       totalUsers,
//       totalRequests,
//       pending,
//       completed,
//       paid,
//       revenue,
//       chart
//     });

//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };



const User = require("../models/User");
const Waste = require("../models/WasteRequest");

const getDashboard = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalRequests = await Waste.countDocuments();

    const pending = await Waste.countDocuments({
      status: { $regex: /^pending$/i }
    });

    const completed = await Waste.countDocuments({
      status: { $regex: /^completed$/i }
    });

    const paid = await Waste.countDocuments({
      paymentStatus: { $regex: /^paid$/i }
    });

    const revenueData = await Waste.aggregate([
      { $match: { paymentStatus: { $regex: /^paid$/i } } },
      {
        $group: {
          _id: null,
          total: { $sum: "$price" }
        }
      }
    ]);

    const revenue = revenueData[0]?.total || 0;

    const chart = await Waste.aggregate([
      { $match: { paymentStatus: { $regex: /^paid$/i } } },
      {
        $group: {
          _id: {
            $dateToString: {
              format: "%Y-%m-%d",
              date: "$createdAt"
            }
          },
          price: { $sum: "$price" }
        }
      },
      { $sort: { _id: 1 } },
      { $limit: 7 }
    ]);

    res.json({
      totalUsers,
      totalRequests,
      pending,
      completed,
      paid,
      revenue,
      chart
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getDashboard };
