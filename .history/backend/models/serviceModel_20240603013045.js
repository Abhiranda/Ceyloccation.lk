import mongoose from "mongoose";

//create schema
const serviceSchema = new mongoose.Schema({ //here changed 
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
})

const foodModel = mongoose.models.food || mongoose.model("food",foodSchema)

export default foodModel;