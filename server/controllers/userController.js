import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
export const checkUserLoggedIn = asyncHandler((req, res) => {
  const token = req.cookies.token;

  if (!token) res.json({ loggedin: false, message: "no token" });
});
