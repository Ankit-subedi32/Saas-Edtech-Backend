
import express, { Router } from "express"
// Make sure the file exists at the specified path and the name matches exactly (including casing and extension).
import AuthController from "../../controller/globals/auth/authController"

const router:Router = express.Router()

router.route("/register").post(AuthController.registerUser)

export default router