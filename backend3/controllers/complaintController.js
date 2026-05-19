// const Complaint = require("../models/Complaint");


// // 🟢 USER: CREATE COMPLAINT
// exports.createComplaint = async (req, res) => {
//   try {
//     const { message } = req.body;

//     if (!message) {
//       return res.status(400).json("Message is required");
//     }

//     const complaint = await Complaint.create({
//       user: req.user.id,
//       message,
//       status: "Pending", // ✅ NEW
//     });

//     res.json(complaint);

//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// };


// // 🟢 USER: GET MY COMPLAINTS
// exports.getMyComplaints = async (req, res) => {
//   try {
//     const data = await Complaint.find({ user: req.user.id })
//       .sort({ createdAt: -1 });

//     res.json(data);

//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// };


// // 🔴 ADMIN: GET ALL COMPLAINTS
// exports.getComplaints = async (req, res) => {
//   try {
//     const complaints = await Complaint.find()
//       .populate("user")
//       .sort({ createdAt: -1 });

//     res.json(complaints);

//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// };


// // 🔴 ADMIN: REPLY TO COMPLAINT
// exports.replyComplaint = async (req, res) => {
//   try {
//     const { reply } = req.body;

//     if (!reply) {
//       return res.status(400).json("Reply is required");
//     }

//     const complaint = await Complaint.findByIdAndUpdate(
//       req.params.id,
//       {
//         reply,
//         status: "Replied",   // ✅ UPDATE STATUS
//         repliedAt: new Date() // ✅ OPTIONAL
//       },
//       { new: true }
//     );

//     res.json(complaint);

//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// };


// // ✏️ USER: EDIT COMPLAINT
// exports.updateComplaint = async (req, res) => {
//   try {
//     const { message } = req.body;

//     const complaint = await Complaint.findOneAndUpdate(
//       { _id: req.params.id, user: req.user.id }, // ✅ ONLY OWNER CAN EDIT
//       { message },
//       { new: true }
//     );

//     if (!complaint) {
//       return res.status(404).json("Complaint not found");
//     }

//     res.json(complaint);

//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// };


// // ❌ USER: DELETE COMPLAINT
// exports.deleteComplaint = async (req, res) => {
//   try {
//     const complaint = await Complaint.findOneAndDelete({
//       _id: req.params.id,
//       user: req.user.id // ✅ ONLY OWNER CAN DELETE
//     });

//     if (!complaint) {
//       return res.status(404).json("Complaint not found");
//     }

//     res.json({ message: "Deleted successfully" });

//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// };




 const Complaint = require("../models/Complaint");

 // 🟢 CREATE
//  exports.createComplaint = async (req, res) => {
//    try {
//      const { message } = req.body;

//      const complaint = await Complaint.create({
//        user: req.user.id,
//        message,
//        status: "Pending",
//      });

//      res.json(complaint);
//    } catch (err) {
//      res.status(500).json(err.message);
//    }
//  };
  exports.createComplaint =
async (req, res) => {

  try {

    const complaint =
    await Complaint.create({

      user: req.user.id,

      role: req.user.role,

      message: req.body.message,

    });

    res.json(complaint);

  } catch (err) {

    res.status(500).json(err.message);

  }

};


 // 🟢 USER GET
 exports.getMyComplaints = async (req, res) => {
   const data = await Complaint.find({ user: req.user.id })
     .sort({ createdAt: -1 });

   res.json(data);
 };

 // 🔴 ADMIN GET ALL
 exports.getComplaints = async (req, res) => {
   const data = await Complaint.find()
     .populate("user")
     .sort({ createdAt: -1 });

   res.json(data);
 };

 // 🔴 REPLY / UPDATE / CLEAR
 exports.replyComplaint = async (req, res) => {
  const { reply } = req.body;

   let updateData = {};

   if (!reply || reply === "") {
     // ❌ CLEAR
     updateData = {
       reply: "",
       status: "Pending"
     };
   } else {
     // ✅ REPLY
     updateData = {
       reply,
       status: "Replied",
       repliedAt: new Date()
     };
   }

   const data = await Complaint.findByIdAndUpdate(
     req.params.id,
     updateData,
     { new: true }
   );

   res.json(data);
 };

 // ❌ ADMIN DELETE
 exports.deleteComplaintAdmin = async (req, res) => {
   await Complaint.findByIdAndDelete(req.params.id);
   res.json({ msg: "Deleted by admin" });
 };

 // ✏️ USER UPDATE COMPLAINT
exports.updateComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!complaint) {
      return res.status(404).json({ msg: "Complaint not found" });
    }

    complaint.message = req.body.message;

    await complaint.save();

    res.json({ msg: "Updated successfully", complaint });

  } catch (err) {
    res.status(500).json(err.message);
  }
};


// ❌ USER DELETE COMPLAINT
exports.deleteComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!complaint) {
      return res.status(404).json({ msg: "Complaint not found" });
    }

    await complaint.deleteOne();

    res.json({ msg: "Deleted successfully" });

  } catch (err) {
    res.status(500).json(err.message);
  }
};
