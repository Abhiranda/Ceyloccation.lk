import mongoose from "mongoose";

 export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://abhiranda21:abc1234@cluster0.xp9ssys.mongodb.net/Ce').then(()=>console.log("DB connected"));
}
