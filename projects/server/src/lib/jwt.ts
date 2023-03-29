import jwt from "jsonwebtoken"

const SECRET_KEY = process.env.SECRET_KEY

interface Payload {
  [key: string]: any
}

export const signToken = (payload: Payload): string => {
  return jwt.sign(payload, SECRET_KEY as string, {
    expiresIn: "1h",
  })
}

export const validateToken = (token: string): Payload => {
  return jwt.verify(token, SECRET_KEY as string) as Payload
}

export const decode = (token: string): null | Payload => {
  return jwt.decode(token) as null | Payload
}
