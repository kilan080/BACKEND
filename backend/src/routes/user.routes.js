import { Router } from "express";
import { loginUser, registerUser, logOutUser} from "../controller/user.controller.js"; 
const router = Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser)
router.route('/logout').post(logOutUser)

export default router;