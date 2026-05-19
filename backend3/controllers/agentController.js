// const Waste = require("../models/WasteRequest");
//  const transporter = require("../Config/mailer");
//  const User = require("../models/User");

//  // // Agent → view assigned requests
//   exports.getAssignedWork = async (req, res) => {
//     try {
//       const data = await Waste.find({ agent: req.user.id })
//       res.json(data);
//     } catch (err) {
//       res.status(500).json(err.message);
//     }
//   };

//  // // Agent → mark as collected
// // // exports.updateToCollected = async (req, res) => {
// // //   try {
// // //     const waste = await Waste.findByIdAndUpdate(
// // //       req.params.id,
// // //       { status: "Collected" },
// // //       { new: true }
// // //     );
// // //     res.json(waste);
// // //   } catch (err) {
// // //     res.status(500).json(err.message);
// // //   }

// // // };
//  exports.updateToCollected = async (req, res) => {
//    try {
//      const waste = await Waste.findByIdAndUpdate(
//       { _id: req.params.id, agent: req.user.id },
//        { status: "Collected" },
//        { new: true }
//      ).populate("user");

//      if (!waste) return res.status(404).json("Waste not found");

//      // ✅ Send Email to User
//      await transporter.sendMail({
//        to: waste.user.email,
//        subject: "Waste Collected",
//        text: `Your waste request ${waste.requestId} has been successfully collected.`,
//      });

//      res.json(waste);

//    } catch (err) {
//      res.status(500).json(err.message);
//    }
//  };


// // // ✅ AGENT WORK
//  exports.agentWork =
//  async (req, res) => {

//    try {

//      const data =
//      await Waste.find({
//        agent: req.user._id
//      });

//      res.json(data);

//    } catch (err) {

//      res.status(500).json(err.message);

//    }

//  };

// // // ✅ COLLECT
//  exports.collectWaste =
//  async (req, res) => {

//    try {

//      const waste =
//      await Waste.findById(
//        req.params.id
//      );

//      if (!waste) {

//        return res
//        .status(404)
//        .json("Not found");

//      }

//      waste.status =
//     "Collected";

//     await waste.save();

//      res.json(waste);

//   } catch (err) {

//      res.status(500).json(err.message);

//    }

//  };

const Waste = require("../models/WasteRequest");

const User = require("../models/User");

const transporter =
require("../Config/mailer");



// ================= GET ASSIGNED WORK =================

exports.getAssignedWork =
async (req, res) => {

  try {

    const data = await Waste.find({
      agent: req.user.id
    }).populate("user");

    res.json(data);

  } catch (err) {

    res.status(500).json(
      err.message
    );

  }

};


// ================= MARK COLLECTED =================

exports.updateToCollected =
async (req, res) => {

  try {

    const waste =
    await Waste.findOneAndUpdate(

      {
        _id: req.params.id,
        agent: req.user.id
      },

      {
        status: "Collected"
      },

      {
        new: true
      }

    ).populate("user");


    if (!waste) {

      return res.status(404).json(
        "Waste not found"
      );

    }


    // ✅ EMAIL

    await transporter.sendMail({

      to: waste.user.email,

      subject: "Waste Collected",

      text:
      `Your waste request has been collected successfully.`

    });


    res.json(waste);

  } catch (err) {

    res.status(500).json(
      err.message
    );

  }

};


// ================= GET ALL AGENTS =================

exports.getAllAgents =
async (req, res) => {

  try {

    const agents = await User.find({

      role: "agent"

    });

    res.json(agents);

  } catch (err) {
     res.status(500).json(err.message);
    

  }

};
// ================= PICKUP AGENTS =================

exports.getPickupAgents = async (req, res) => {

  try {

    const data = await Waste.find({

      agent: { $ne: null }

    })

    .populate("agent")
    .populate("user");

    res.json(data);

  } catch (err) {

    res.status(500).json(err.message);

  }

};


exports.getAgentHistory = async (req, res) => {
  try {

    
     const agentId = req.user.id;

    const history = await Waste.find({
      agent: agentId,
      status: "Collected"
    });

    res.json(history);

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};


// ================= UPDATE AGENT =================
exports.updateAgent = async (req, res) => {

  try {

    const updatedAgent =
      await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json(updatedAgent);

  } catch (error) {

    console.log(error);

    res.status(500).json("Update Failed");
  }
};

// ================= DELETE AGENT =================
exports.deleteAgent = async (req, res) => {

  try {

    await User.findByIdAndDelete(
      req.params.id
    );

    res.json("Agent Deleted");

  } catch (error) {

    console.log(error);

    res.status(500).json("Delete Failed");
  }
};

exports.updateComplaint = async (req, res) => {

  try {

    const updated =
      await Complaint.findByIdAndUpdate(

        req.params.id,

        {
          message: req.body.message
        },

        {
          new: true
        }

      );

    res.json(updated);

  } catch (error) {

    console.log(error);

    res.status(500).json(
      "Update Failed"
    );
  }
};
