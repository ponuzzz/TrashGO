const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const transporter = require("../Config/mailer");

exports.register = async (req, res) => {

  try {

    const {

      name,
      email,
      password,
      role,

      address,
      district,
      phone,
      idNumber,

    } = req.body;

    

    if (!name || !email || !password) {

      return res
      .status(400)
      .json("All fields are required");

    }

    if (!/\S+@\S+\.\S+/.test(email)) {

      return res
      .status(400)
      .json("Invalid email format");

    }

    if (password.length < 8) {

      return res
      .status(400)
      .json("Password must be at least 8 characters");

    }

    // AGENT VALIDATION 

    if (role === "agent") {

      if (
        !address ||
        !district ||
        !phone ||
        !idNumber
      ) {

        return res
        .status(400)
        .json("Please fill all agent details");

      }

    }

    // EMAIL CHECK 

    const existingUser =
    await User.findOne({ email });

    if (existingUser) {

      return res
      .status(400)
      .json("Email already registered");

    }

    //  HASH PASSWORD 

    const hashed =
    await bcrypt.hash(password, 10);

    // CREATE USER 

    await User.create({

      name,
      email,

      password: hashed,

      role:
      role === "admin"
      ? "admin"
      : role === "agent"
      ? "agent"
      : "user",

      

      address,
      district,
      phone,
      idNumber,

    });

    res.json({

      message:
      "Registered Successfully ✅"

    });

  } catch (err) {

    console.log(err);

    res
    .status(500)
    .json("Server error ❌");

  }

};

// FORGOT PASSWORD
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json("User not found");

    const token = crypto.randomBytes(32).toString("hex");

    user.resetToken = token;
    user.resetTokenExpiry = Date.now() + 10 * 60 * 1000;

    await user.save();

    // const link = `http://localhost:5174/reset/${token}`;
    const link = `https://trashgo-frontends.onrender.com/reset/${token}`;

    await transporter.sendMail({
      to: email,
      subject: "Reset Password",
      text: `Click to reset:\n${link}`,
    });

    res.json("Reset link sent ✅");

  } catch (err) {
    console.log(err);
    res.status(500).json("Error sending email");
  }
};

 




exports.resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json("Invalid or expired token");
    }

    const hashed = await bcrypt.hash(password, 10);

    user.password = hashed;
    user.resetToken = null;
    user.resetTokenExpiry = null;

    await user.save();
    //  const link = `https://trashgo-frontends.onrender.com/reset/${token}`;

    res.json("Password updated successfully ✅");

  } catch (err) {
    res.status(500).json("Error resetting password");
  }
};

//  LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json("User not found");

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json("Wrong password");

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET
    );

    res.json({ token, user });

  } catch (err) {
    res.status(500).json(err.message);
  }
};
