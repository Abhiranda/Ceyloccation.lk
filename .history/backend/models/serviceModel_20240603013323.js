import mongoose from "mongoose";

//create schema (changed)
const serviceSchema = new mongoose.Schema({ 
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
})

const foodModel = mongoose.models.food || mongoose.model("service",serviceSchema)

export default foodModel;