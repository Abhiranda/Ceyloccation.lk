import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import serviceRouter from "./routes/serviceRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

//app config
const app=express()
const port=4000

//middleware
app.use(express.json())
app.use(cors())     //can access any backend from frontend

//db connection
connectDB();

//API endpoints
app.use("/api/service",serviceRouter)
app.use("/images",express.static('uploads')) //show the services as images on our home 
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API working")
})

//run express server
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

