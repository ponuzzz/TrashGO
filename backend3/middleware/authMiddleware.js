 
// const jwt = require("jsonwebtoken");

// const User = require("../models/User");

// const protect = async (req, res, next) => {

//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {

//     try {

//       token =
//         req.headers.authorization.split(" ")[1];

//       const decoded = jwt.verify(
//         token,
//         process.env.JWT_SECRET
//       );

//       req.user = await User.findById(decoded.id)
//         .select("-password");

//       next();

//     } catch (err) {

//       return res.status(401).json("Not authorized");

//     }

//   }

//   if (!token) {

//     return res.status(401).json("No token");

//   }
// };

// // ✅ AGENT
// const isAgent = (req, res, next) => {

//   if (
//     req.user &&
//     req.user.role === "agent"
//   ) {

//     next();

//   } else {

//     res.status(403).json("Agent only");

//   }

// };

// // ✅ ADMIN
// const isAdmin = (req, res, next) => {

//   if (
//     req.user &&
//     req.user.role === "admin"
//   ) {

//     next();

//   } else {

//     res.status(403).json("Admin only");

//   }

// };

// module.exports = {
//   protect,
//   isAgent,
//   isAdmin
// };


// const jwt = require("jsonwebtoken");

// const User = require("../models/User");


// // ✅ PROTECT
// const protect = async (req, res, next) => {

//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {

//     try {

//       token =
//         req.headers.authorization.split(" ")[1];

//       const decoded = jwt.verify(
//         token,
//         process.env.JWT_SECRET
//       );

//       req.user = await User.findById(decoded.id)
//         .select("-password");

//       next();

//     } catch (err) {

//       return res.status(401).json("Not authorized");

//     }

//   }

//   if (!token) {

//     return res.status(401).json("No token");

//   }

// };


// // ✅ AGENT CHECK
// const isAgent = (req, res, next) => {

//   if (
//     req.user &&
//     req.user.role === "agent"
//   ) {

//     next();

//   } else {

//     res.status(403).json("Agent only");

//   }

// };


// // ✅ ADMIN CHECK
// const isAdmin = (req, res, next) => {

//   if (
//     req.user &&
//     req.user.role === "admin"
//   ) {

//     next();

//   } else {

//     res.status(403).json("Admin only");

//   }

// };

// module.exports = {
//   protect,
//   isAgent,
//   isAdmin
// };

const jwt = require("jsonwebtoken");

const User = require("../models/User");


// ================= PROTECT =================

const protect = async (req, res, next) => {

  let token;

  // CHECK TOKEN
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {

    try {

      // GET TOKEN
      token =
        req.headers.authorization.split(" ")[1];

      // VERIFY TOKEN
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
      );

      // GET USER
      req.user = await User.findById(
        decoded.id
      ).select("-password");

      // USER NOT FOUND
      if (!req.user) {

        return res
          .status(401)
          .json("User not found");

      }

      next();

    } catch (err) {

      return res
        .status(401)
        .json("Not authorized");

    }

  } else {

    return res
      .status(401)
      .json("No token");

  }

};


// ================= ADMIN =================

const isAdmin = (req, res, next) => {

  if (
    req.user &&
    req.user.role === "admin"
  ) {

    next();

  } else {

    res
      .status(403)
      .json("Admin only");

  }

};


// ================= AGENT =================

const isAgent = (req, res, next) => {

  if (
    req.user &&
    req.user.role === "agent"
  ) {

    next();

  } else {

    res
      .status(403)
      .json("Agent only");

  }

};


module.exports = {

  protect,
  isAdmin,
  isAgent

};
