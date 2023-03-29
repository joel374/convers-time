import { NextFunction, Request, Response } from "express"
import { validateToken } from "../lib/jwt"

interface AuthenticatedRequest extends Request {
  user: {}
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization

  if (!token) {
    return res.status(401).json({
      message: "User unauthorized",
    })
  }

  try {
    token = token.split(" ")[1]

    const verifiedUser = validateToken(token)

    if (!verifiedUser) {
      return res.status(401).json({
        message: "Unauthorized request",
      })
    }

    if ("user" in req) {
      req.user = verifiedUser
    }

    next()
  } catch (err) {
    console.log(err)
  }
}
