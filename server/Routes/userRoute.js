import { Router } from "express";
import { checkUserLoggedIn } from "../controllers/userController.js";
const router=Router()


router.get("/checkAuth",checkUserLoggedIn)



export default router