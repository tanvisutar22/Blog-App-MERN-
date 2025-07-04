import app from './app.js'
import dotenv from 'dotenv'
import { connectDB } from './DB/index.js'
import e from 'express'
dotenv.config({
    path:'./.env'
})
console.log(process.env.PORT)
connectDB().then(()=>{
    app.listen(process.env.PORT||8001,()=>{
    console.log("server running on "+process.env.PORT)
}) 
}).catch((e)=>{
    console.log("error while starting server :")
})
