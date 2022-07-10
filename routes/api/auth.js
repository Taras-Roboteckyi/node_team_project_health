const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
  confirm,
  resend,
} = require("../../controllers/users");
const router = express.Router();
const {
  schemaRegister,
  schemaLogin,
  schemaVerify,
} = require("../../models/user");
const { validateRequest } = require("../../middlewares/validateRequest");
const { auth } = require("../../middlewares");

router.post("/register", validateRequest(schemaRegister), registerUser);
router.post("/login", validateRequest(schemaLogin), loginUser);
router.post("/logout", auth, logoutUser);
router.get("/user", auth, getUser);

router.get("/verify/:verificationToken", confirm);
router.post("/verify", validateRequest(schemaVerify), resend);

module.exports = router;
