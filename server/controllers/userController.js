import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { bcryptPassword } from "../bcrypt/bcrypt.js";

export const checkUserLoggedIn = asyncHandler((req, res) => {
  const token = req.cookies.token;

  if (!token) return res.json({ loggedin: false, message: "no token" });
});

export const userRegister=asyncHandler((req,res)=>{

    const { name, email, password, mobile } = req.body;
   
const newPassword= bcryptPassword(password)
console.log(newPassword,name,email);
})
