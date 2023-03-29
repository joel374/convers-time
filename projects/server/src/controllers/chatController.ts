import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
const prisma = new PrismaClient()

export const chatController = {
  createChat: async (req: Request, res: Response) => {
    try {
      const { message } = req.body
      const { id } = req.params

      const chat = await prisma.chat.create({
        data: {
          //   from: req.user.id,
        },
      })
    } catch (error) {
      return res.status(500).json({
        message: "Server error",
      })
    }
  },
}
