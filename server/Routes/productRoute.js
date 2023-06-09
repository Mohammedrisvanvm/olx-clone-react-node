import { Router } from "express";
import { adminHome } from "../controllers/productController.js";

const router=Router()


router.get("/addProduct",adminHome)



export default router