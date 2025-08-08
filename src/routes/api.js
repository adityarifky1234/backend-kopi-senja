import express from "express";
import welcomeController from "../controller/welcome.controller.js";

const router = express.Router();

router.get("/welcome", welcomeController.Welcome);

export default router;
