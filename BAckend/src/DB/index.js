import mongoose from 'mongoose'
 const connectDB=async()=>{
    try {
       await mongoose.connect(process.env.MONGODB_URI+'blog');
       console.log("DB connected")

    } catch (error) {
        console.log("Error while connecting DB:"+error)
    }
 }
 export {connectDB};