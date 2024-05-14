import { adminLogin, logout } from "../../controllers/user.js";
import express from "express";
const router = express.Router();


router.post("/login", adminLogin);
router.get("/logout", logout);

export default router;
