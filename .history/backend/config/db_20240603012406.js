import mongoose from "mongoose";

 export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://abhiranda21:abc1234@cluster0.xp9ssys.mongodb.net/?').then(()=>console.log("DB connected"));
}
