const express = require("express")
const router = express.Router()

// usercontroller
const authMiddleWare = require("../middleware/AuthMiddleware")
const {
  register,
  login,
  checkUser,
  getFullName,
  getUserStats,
} = require("../controller/userController");

router.post("/register", register)
router.post("/login", login)
router.get("/check", authMiddleWare,checkUser)
router.get("/getFullName", authMiddleWare, getFullName)
router.get("/getUserStats", getUserStats);

module.exports = router
