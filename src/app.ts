import express from 'express'
const app = express()
import authRoute from "./route/globals/auth/authRoute"
import instituteRoute from "./route/insititude/instituteRoute"
import courseRoute from './route/insititude/course/courseRoute'
import studentRoute from './route/insititude/student/studentRoute'
import categoryRoute from './route/insititude/category/categoryRoute'

app.use(express.json())
// alternative body-parser

app.use("/api",authRoute)
app.use("/api/institute",instituteRoute)
app.use('/api/institute/course',courseRoute)
app.use('/api/institute/student',studentRoute)
app.use('/api/institute/category',categoryRoute)

export default app