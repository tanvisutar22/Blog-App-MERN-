import mongoose from "mongoose";
const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mail:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})
export const admin = mongoose.model('Admin',adminSchema)