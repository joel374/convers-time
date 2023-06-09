import express from "express"
import { userController } from "../controllers/userController"
export const router = express.Router()

router.post("/createUsers", userController.registerUser)
router.post("/loginUsers", userController.loginUser)
router.get("/findAllUsers", userController.findAllUsers)
