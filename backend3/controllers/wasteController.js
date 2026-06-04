
// const Waste = require("../models/WasteRequest");
// const Price = require("../models/price"); // 🔥 ADD THIS
//  const transporter = require("../Config/mailer");
// const razorpay = require("../Config/razorpay");
// const crypto = require("crypto");
// const User = require("../models/User");
// const generateId = () => {
//   return "WR" + Date.now();
// };

// // Create request (User)
// exports.createWaste = async (req, res) => {
//   try {
//     const { wasteType, weight, address } = req.body;

//     // 🔥 GET PRICE FROM DB
//     const priceData = await Price.findOne({ type: wasteType });

//     const pricePerKg = priceData ? priceData.pricePerKg : 10;

//     const total = weight * pricePerKg;

//     const image = req.file ? req.file.path : "";

//     const waste = await Waste.create({
//       requestId: generateId(),
//       user: req.user.id,
//       wasteType,
//       weight,
//       price: total,
//       address,
//       //image,
//       image: req.file ? req.file.filename : null

//     });

//     res.json(waste);
//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// };
// // Get all requests (Admin)
// // exports.getAllWaste = async (req, res) => {
// //   const data = await Waste.find().populate("user");
// //   res.json(data);
// // };
// // await transporter.sendMail({
// //   to: user.email,
// //   subject: "Waste Request Confirmed",
// //   text: `Your request ${waste.requestId} is received. Amount: ₹${total}`
// // });



// exports.getAllWaste = async (req, res) => {
//   try {
//     const { status, page = 1 } = req.query;

//     let filter = {};
//     if (status) filter.status = status;

//     const limit = 5;

//     const data = await Waste.find(filter)
//       .populate("user")
//       .populate("agent") // 🔥 IMPORTANT
//       .skip((page - 1) * limit)
//       .limit(limit);

//     res.json(data);
//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// };

// // Get logged-in user's waste (User)
// exports.getMyWaste = async (req, res) => {
//   try {
//     const data = await Waste.find({ user: req.user.id });
//     res.json(data);
//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// };

// //razopy


// exports.createOrder = async (req, res) => {
//   try {
//     const waste = await Waste.findById(req.params.id);

//     const options = {
//       amount: waste.price * 100, // paise
//       currency: "INR",
//       receipt: waste.requestId,
//     };

//     const order = await razorpay.orders.create(options);

//     res.json(order);
//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// };



// exports.verifyPayment = async (req, res) => {
//   try {
//     const {
//       wasteId,
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature
//     } = req.body;

//     const body = razorpay_order_id + "|" + razorpay_payment_id;

//     const expectedSignature = crypto
//       .createHmac("sha256", process.env.RAZORPAY_SECRET)
//       .update(body)
//       .digest("hex");

//     if (expectedSignature !== razorpay_signature) {
//       return res.status(400).json("Payment verification failed");
//     }

//     const waste = await Waste.findByIdAndUpdate(
//       wasteId,
//       { paymentStatus: "Paid" },
//       { new: true }
//     );

//     res.json({ message: "Payment successful", waste });

//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// };



// // Update status (Admin)
// exports.updateStatus = async (req, res) => {
//   // const { status, agentName, pickupDate, pickupTime } = req.body;
//   // const updateData = { status };
//   // if (agentName) updateData.agent = agentName;
//   // //if (agentName) updateData.agent = agentName; // pass agent _id from frontend


//   const { status, agentId, pickupDate, pickupTime } = req.body;
//   const updateData = { status };
//   if (agentId) updateData.agent = agentId;
//   if (pickupDate) updateData.pickupDate = pickupDate;
//   if (pickupTime) updateData.pickupTime = pickupTime;

//   const waste = await Waste.findByIdAndUpdate(
//     req.params.id,
//     updateData,
//     { new: true }
//   );

//   res.json(waste);
// };

// const Price = require("../models/price");



// // 🔴 ADMIN: Add / Update price
// exports.setPrice = async (req, res) => {
//   try {
//     const { type, pricePerKg } = req.body;

//     const data = await Price.findOneAndUpdate(
//       { type },
//       { pricePerKg },
//       { upsert: true, new: true }
//     );

//     res.json(data);
//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// };

// // 🟢 GET: All prices
// exports.getPrices = async (req, res) => {
//   try {
//     const data = await Price.find();
//     res.json(data);
//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// };



// // ✅ CREATE PAYMENT ORDER
// exports.createOrder = async (req, res) => {
//   try {
//     const waste = await Waste.findById(req.params.id);

//     if (!waste) return res.status(404).json("Waste not found");

//     const order = await razorpay.orders.create({
//       amount: waste.price * 100,
//       currency: "INR",
//       receipt: waste.requestId,
//     });

//     res.json(order);

//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// };



// // ✅ VERIFY PAYMENT (SECURE)
// exports.verifyPayment = async (req, res) => {
//   try {
//     const {
//       wasteId,
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature
//     } = req.body;

//     const body = razorpay_order_id + "|" + razorpay_payment_id;

//     const expected = crypto
//       .createHmac("sha256", process.env.RAZORPAY_SECRET)
//       .update(body)
//       .digest("hex");

//     if (expected !== razorpay_signature) {
//       return res.status(400).json("Payment verification failed");
//     }

//     const waste = await Waste.findByIdAndUpdate(
//       wasteId,
//       { paymentStatus: "Paid" },
//       { new: true }
//     );

//     res.json({ message: "Payment successful", waste });

//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// };



// // ✅ UPDATE STATUS (ADMIN)
// exports.updateStatus = async (req, res) => {
//   try {
//     const { status, agentId, pickupDate, pickupTime } = req.body;

//     const updateData = { status };

//     if (agentId) updateData.agent = agentId;
//     if (pickupDate) updateData.pickupDate = pickupDate;
//     if (pickupTime) updateData.pickupTime = pickupTime;

//     const waste = await Waste.findByIdAndUpdate(
//       req.params.id,
//       updateData,
//       { new: true }
//     );

//     res.json(waste);

//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// };

const Waste = require("../models/WasteRequest");
// const Price = require("../models/price");
const WasteType = require("../models/WasteType");

const User = require("../models/User");
const razorpay = require("../Config/razorpay");
const transporter = require("../Config/mailer");
const crypto = require("crypto");



const generateId = () => "WR" + Date.now();
exports.createWaste = async (req, res) => {

  try {
    const {
      wasteType,
      weight,
      address,
      name,
      phone,
      district,
      place,
      landmark
    } = req.body;
     const PAID_BY_ADMIN_TYPES = [
      "E-Waste",
      "Battery Waste",
      "Metal",
      "Aluminium"
    ];

    const adminPays = PAID_BY_ADMIN_TYPES.includes(wasteType);


    if (!wasteType || !weight || !address || !name || !phone) {
      return res.status(400).json("All fields required");
    }

    if (weight <= 0) {
      return res.status(400).json("Invalid weight");
    }

    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json("User not found");
    if (user.isBlocked) return res.status(403).json("User blocked");

    const priceData = await  WasteType.findOne({ type: wasteType });
    if (!priceData) return res.status(400).json("Price not set for this type");

      // const total = weight * priceData.pricePerKg;
      const total =
  Number(weight) * Number(priceData.pricePerKg);
  

    const waste = await Waste.create({
      requestId: generateId(),
      user: req.user.id,
      wasteType,
      weight,
      price: total,
      address,
      name,
      phone,
      district,
      place,
      landmark,
      status: "Pending",
      paymentStatus: "Not Paid",
       paidBy: adminPays ? "ADMIN" : "USER",
      image: req.file ? req.file.filename : null
    });

    try {
      await transporter.sendMail({
        to: user.email,
        subject: "Waste Request Created",
        text: `Your request ${waste.requestId} is created. Amount: ₹${total}`
      });
    } catch (err) {
      console.log("Email error:", err.message);
    }

    res.json(waste);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// 
exports.getAllWaste = async (req, res) => {
  try {
    const { status, wasteType } = req.query;

    let filter = {};
    if (status) filter.status = status;
    if (wasteType) filter.wasteType = wasteType;

    const data = await Waste.find(filter)
      .populate("user")
      .populate("agent");

    res.json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};


// exports.getMyWaste = async (req, res) => {
//   try {
//     if (!req.user || !req.user.id) return res.status(401).json("Unauthorized ❌");
//     const data = await Waste.find({ user: req.user.id });
//     res.json(data);
//   } catch (err) {
//     console.log("ERROR IN getMyWaste:", err);
//     res.status(500).json("Server error ❌");
//   }
// };

exports.createOrder = async (req, res) => {
  try {
    const waste = await Waste.findById(req.params.id);
    if (!waste) return res.status(404).json("Waste not found");
    if (waste.status !== "Approved") return res.status(400).json("Waste not approved yet");

    const order = await razorpay.orders.create({
      amount: waste.price * 100,
      currency: "INR",
      receipt: waste.requestId,
    });

    res.json(order);
  } catch (err) {
    console.log("CREATE ORDER ERROR:", err);
    res.status(500).json(err.message);
  }
};

// exports.getPriceByType = async (req, res) => {
//   try {
//     const price = await Price.findOne({ type: req.params.type });
//     if (!price) return res.status(404).json("Price not found");
//     res.json(price);
//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// };

exports.getPriceByType = async (req, res) => {
  try {
    const waste = await WasteType.findOne({
      type: req.params.type
    });

    if (!waste) {
      return res.status(404).json("Not found");
    }

    res.json({ pricePerKg: waste.pricePerKg });
  } catch {
    res.status(500).json("Error");
  }
};



exports.verifyPayment = async (req, res) => {
  try {
    const { wasteId, razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expected = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(body)
      .digest("hex");

    if (expected !== razorpay_signature) return res.status(400).json("Payment verification failed");

    const waste = await Waste.findByIdAndUpdate(
      wasteId,
      { paymentStatus: "Paid", paidAt: new Date() },
      { new: true }
    );

    res.json({ message: "Payment successful", waste });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// exports.updateStatus = async (req, res) => {
//   try {
//     const { status, agentId, pickupDate, pickupTime } = req.body;
//     const allowedStatus = ["Pending", "Approved", "Assigned", "Collected", "Completed"];

//     if (status && !allowedStatus.includes(status)) return res.status(400).json("Invalid status");

//     const waste = await Waste.findById(req.params.id);
//     if (!waste) return res.status(404).json("Waste not found");

//     if (status === "Completed" && waste.paymentStatus !== "Paid") {
//       return res.status(400).json("Payment not done yet");
//     }

//     if (status) waste.status = status;
//     if (agentId) waste.agent = agentId;
//     if (pickupDate) waste.pickupDate = pickupDate;
//     if (pickupTime) waste.pickupTime = pickupTime;

//     await waste.save();
//     res.json(waste);
//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// };

exports.updateWaste = async (req, res) => {
  try {
    const waste = await Waste.findById(req.params.id);

    if (!waste) {
      return res.status(404).json("Waste not found");
    }

    // 🔥 Restriction
    if (waste.status !== "Pending") {
      return res.status(400).json("Cannot edit after approval");
    }

    // 🔥 Update fields
    waste.name = req.body.name;
    waste.phone = req.body.phone;
    waste.district = req.body.district;
    waste.place = req.body.place;
    waste.landmark = req.body.landmark;
    waste.wasteType = req.body.wasteType;
    waste.weight = req.body.weight;
    waste.address = req.body.address;

    // 🔥 Image update (optional)
    if (req.file) {
      waste.image = req.file.path;
    }

    await waste.save();

    res.json(waste);
  } catch (err) {
    res.status(500).json("Update failed");
  }
};

exports.deleteWaste = async (req, res) => {
  try {
    const waste = await Waste.findById(req.params.id);

    if (!waste) {
      return res.status(404).json("Waste not found");
    }

    // 🔥 Restriction
    if (waste.status !== "Pending") {
      return res.status(400).json("Cannot delete after approval");
    }

    await Waste.findByIdAndDelete(req.params.id);

    res.json("Deleted successfully");
  } catch (err) {
    res.status(500).json("Delete failed");
  }
};
exports.adminPay = async (req, res) => {
  try {
    const waste = await Waste.findById(req.params.id);

    if (!waste) return res.status(404).json("Not found");

    if (waste.paidBy !== "ADMIN") {
      return res.status(400).json("Not admin payable");
    }

    if (waste.paymentStatus === "Paid") {
      return res.status(400).json("Already paid");
    }

    waste.paymentStatus = "Paid";
    waste.adminPaidAt = new Date();

    await waste.save();
     const user = await User.findById(waste.user);

    if (user?.email) {
      try {
        await transporter.sendMail({
          to: user.email,
          subject: "Payment Completed",
          text: `Your waste request ${waste.requestId} has been paid during pickup. Thank you for recycling! ♻️`

        });
      } catch (err) {
        console.log("Email error:", err.message);
      }
    }

    res.json(waste);
  } catch (err) {
    res.status(500).json(err.message);
  }
};


exports.updateStatus = async (req, res) => {

  try {

    const {
      status,
      agentId,
      pickupDate,
      pickupTime
    } = req.body;

    const waste =
    await Waste.findById(req.params.id);

    if (!waste) {
      return res.status(404).json("Not found");
    }

    // STATUS
    if (status) {
      waste.status = status;
    }

    // ASSIGN AGENT
    if (agentId) {
      waste.agent = agentId;
    }

    // DATE
    if (pickupDate) {
      waste.pickupDate = pickupDate;
    }

    // TIME
    if (pickupTime) {
      waste.pickupTime = pickupTime;
    }

    await waste.save();

    res.json(waste);

  } catch (err) {

    res.status(500).json(err.message);

  }

};


exports.getMyWaste = async (req, res) => {

  try {

    const data = await Waste.find({
      user: req.user.id
    })
    .populate("agent");

    res.json(data);

  } catch (err) {

    res.status(500).json(err.message);

  }

};

// ================= AGENT MARK COLLECTED =================
exports.markCollected = async (req, res) => {

  try {

    const waste = await Waste.findById(req.params.id);

    waste.status = "Collected";

    await waste.save();

    res.json({
      message: "Collected Successfully"
    });

  } catch (err) {

    res.status(500).json("Server Error");

  }

};

