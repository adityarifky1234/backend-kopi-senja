import express from "express";
import welcomeController from "../controller/welcome.controller.js";
import AuthController from "../controller/auth.controller.js";

const router = express.Router();

router.get("/welcome", welcomeController.Welcome);

router.post("/register", AuthController.Register);
router.post("/login", AuthController.Login);

export default router;
