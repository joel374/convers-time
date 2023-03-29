import express from "express"
import { chatController } from "../controllers/chatController"
import { verifyToken } from "../middlewares/authMiddleware"
export const router = express.Router()

router.post("/createChat", verifyToken, chatController.createChat)
