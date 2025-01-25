import express from "express";
import * as authController from "./controller";

const router = express.Router();

router.post("/signup", authController.signUp);
router.post("/login", authController.login);

export default router;
