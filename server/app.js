import  express  from "express";
import userIndex from "./Routes/userRoute.js"
import adminIndex from "./Routes/adminRoute.js"
import dbconnect from "./config/dbconfig.js";
import morgan from "morgan";
import dotenv from "dotenv";
const app=express()
dbconnect()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
dotenv.config();

app.use(morgan("dev"))
app.use('/',userIndex)
app.use('/admin',adminIndex)
app.listen(5000,()=>{
    console.log("server running");
})