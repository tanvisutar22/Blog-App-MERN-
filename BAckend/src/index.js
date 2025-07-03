import app from './app.js'
import dotenv from 'dotenv'
dotenv.config({
    path:'./.env'
})
console.log(process.env.PORT)
app.listen(process.env.PORT||8001,()=>{
    console.log("server running on "+process.env.PORT)
})