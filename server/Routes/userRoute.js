import { Router } from "express";
import { userHome } from "../controllers/userController.js";
const router=Router()


router.get("/",userHome)



export default router