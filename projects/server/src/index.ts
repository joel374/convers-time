import { PrismaClient } from "@prisma/client"
import express from "express"
import { router as userRouter } from "./routers/userRouters"
import { router as chatRouter } from "./routers/chatRouter"

const prisma = new PrismaClient()
const app = express()
const port = 8000 || process.env.PORT

app.use(express.json())

app.get("/", async (req, res) => {
  res.json({
    message: "Hello World!",
  })
})

app.use("/users", userRouter)
app.use("/chats", chatRouter)

app.listen(port, () => console.log(`API RUNNING AT ${port} ✅`))
