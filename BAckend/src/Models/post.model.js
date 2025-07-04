import mongoose  from "mongoose";
const postSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    info:{
        type:String,
        required:true
    },
    likes:{
        type:[String],
    }
},{timestamps:true})

export const post = mongoose.model('Post',postSchema)