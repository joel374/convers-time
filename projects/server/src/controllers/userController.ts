import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
import bcrypt from "bcrypt"
const prisma = new PrismaClient()

export const userController = {
  registerUser: async (req: Request, res: Response) => {
    try {
      const { email, password, username } = req.body
      // tesing
      const findEmail = await prisma.user.findUnique({
        where: {
          email,
        },
      })

      if (findEmail) {
        return res
          .status(404)
          .json({ message: "Email has already been registered" })
      }

      const hashedPassword = bcrypt.hashSync(password, 5)

      const result = await prisma.user.create({
        data: {
          email,
          username,
          password: hashedPassword,
        },
      })

      return res
        .status(200)
        .json({ message: `User created successfully`, data: result })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: "Server error" })
    }
  },
}
