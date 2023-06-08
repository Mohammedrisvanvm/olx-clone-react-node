import { Router } from "express";
import { checkUserLoggedIn, userLogin, userRegister } from "../controllers/userController.js";
const router=Router()


router.get("/checkAuth",checkUserLoggedIn)
router.post('/userRegister',userRegister)
router.post('/userLogin',userLogin)




export default router