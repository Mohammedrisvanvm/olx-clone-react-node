import { Router } from "express";
import { adminHome } from "../controllers/adminController.js";

const router=Router()


router.get("/",adminHome)



export default router