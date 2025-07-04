import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    postId:{ 
        type:mongoose.Schema.ObjectId,
        required:true
    },
    data:{
        type:String,
        required:true
    }
},{timestamps:true})
export const comment = mongoose.model('Comment',commentSchema)