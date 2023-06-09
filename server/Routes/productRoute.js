import { Router } from "express";

import { upload } from "../multer/multer.js";
import {addProduct} from '../controllers/productController.js'
const router=Router()


router.post("/addProduct",upload.single('image'),addProduct)



export default router