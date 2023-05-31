import  express  from "express";
import userIndex from "./Routes/userRoute.js"
import adminIndex from "./Routes/adminRoute.js"
import dbconnect from "./config/dbconfig.js";
const app=express()

app.use('/',userIndex)
app.use('/admin',adminIndex)
dbconnect()
app.listen(4000,()=>{
    console.log("server running");
})