import express from "express"
import { userController } from "../controllers/userController"
export const router = express.Router()

router.post("/createAccount", userController.registerUser)
