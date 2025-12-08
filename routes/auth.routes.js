import { Router } from "express";
import { logout, refreshToken, userLogin, userRegister } from "../controller/auth.controller.js";

const router=Router();

router.post('/login',userLogin);
router.post('/register',userRegister);
router.post('/refresh',refreshToken);
router.post('/logout',logout);

export default router;