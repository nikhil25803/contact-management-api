const express = require("express")
const userController = require("../controllers/userController")
const authenticateToken = require("../middleware/validateTokenHandler")



const router = express.Router()


router.post("/register", userController.registerUser)
router.post("/login", userController.loginUser)
router.get("/current", authenticateToken, userController.currentUser)



module.exports = router