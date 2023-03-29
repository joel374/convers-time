import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
import bcrypt from "bcrypt"
import { signToken } from "../lib/jwt"
const prisma = new PrismaClient()

export const userController = {
  registerUser: async (req: Request, res: Response) => {
    try {
      const { email, password, username } = req.body

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
  loginUser: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body

      const findEmail = await prisma.user.findUnique({
        where: {
          email,
        },
      })

      if (!findEmail) {
        return res.status(404).json({ message: "Email does not exist" })
      }

      const isMatch = bcrypt.compareSync(password, findEmail.password as string)
      if (!isMatch) {
        return res
          .status(404)
          .json({ message: "Email or Password does not match" })
      }

      const token = signToken({
        id: findEmail.id,
      })

      return res
        .status(200)
        .json({ message: "Login successfully", token: token })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: "Server error" })
    }
  },
  findAllUsers: async (req: Request, res: Response) => {
    try {
      const user = await prisma.user.findMany()

      return res.status(200).json({
        message: "Users found successfully",
        data: user,
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: "Server error" })
    }
  },
}
