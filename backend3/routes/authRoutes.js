const router = require("express").Router();
const { register, login ,forgotPassword,resetPassword} = require("../controllers/authController");

router.post("/register", register);
router.post("/forgot", forgotPassword);
router.post("/reset/:token", resetPassword);

router.post("/login", login);

module.exports = router;







