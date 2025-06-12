import express from 'express'
const app = express()
import authRoute from "./route/globals/auth/authRoute"
import instituteRoute from "./route/insititude/instituteRoute"

app.use(express.json())
// alternative body-parser

app.use("/api",authRoute)
app.use("/api/institute",instituteRoute)
export default app