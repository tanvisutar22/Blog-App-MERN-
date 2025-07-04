import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    userName:{
        type:String,
       unique: true,
       required:true
    },
    email:{
         type:String,
       unique: true,
       required:true
    },
    bio:{
        type:String
    },
    profilePic:{
        type:String
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})
export const user=mongoose.model('User',userSchema)