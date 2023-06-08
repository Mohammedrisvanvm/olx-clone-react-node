import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { bcryptPassword } from "../bcrypt/bcrypt.js";
import User from "../model/userModel.js";

export const checkUserLoggedIn = asyncHandler((req, res) => {
  const token = req.cookies.token;

  if (!token) return res.json({ loggedin: false, message: "no token" });
});

export const userRegister=asyncHandler(async(req,res)=>{

    const { name, email, password, mobile } = req.body;
    console.log(mobile);
   const user=await User.findOne({email})
   if(user){
     res.json({ error: true, message: "User Already Exist" })
   }else{

       const newPassword= bcryptPassword(password)
       const newUser=new User({name, email, password:newPassword, mobile})
       await newUser.save();
       console.log(newUser);
       res.json({ error: false, message: "User created" })
   }
})
