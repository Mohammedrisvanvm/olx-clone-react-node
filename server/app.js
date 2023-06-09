import  express  from "express";
import userIndex from "./Routes/userRoute.js"
import productIndex from "./Routes/productRoute.js"
import dbconnect from "./config/dbconfig.js";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from 'cors'
import cookieParser from "cookie-parser";
const app=express()
dbconnect()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
dotenv.config();
app.use(
    cors({
      origin: [
        "http://localhost:3000", 
      ],
      credentials: true,
    })
  );
app.use(morgan("dev"))
app.use('/',userIndex)
app.use('/product',productIndex)
app.listen(5000,()=>{
    console.log("server running");
})