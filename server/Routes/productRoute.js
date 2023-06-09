import { Router } from "express";
import { adminHome } from "../controllers/productController.js";

const router=Router()


router.get("/",adminHome)



export default router