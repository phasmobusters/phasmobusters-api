import express from "express";

import MessageResponse from "../interfaces/MessageResponse";
import authRoutes from "../modules/auth/routes";

const router = express.Router();

router.get<{}, MessageResponse>("/", (_req, res) => {
  res.json({
    message: "API - Phasmobusters",
  });
});

router.use("/auth", authRoutes);

export default router;
