import { Router } from "express";
import { checkUserLoggedIn, userRegister } from "../controllers/userController.js";
const router=Router()


router.get("/checkAuth",checkUserLoggedIn)
router.post('/userRegister',userRegister)



export default router