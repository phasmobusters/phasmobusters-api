import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import favicon from "serve-favicon";

import api from "./api";
import MessageResponse from "./interfaces/MessageResponse";
import { errorHandler } from "./middlewares/errorHandler";
import { notFound } from "./middlewares/notFound";
import path from "path";

require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>("/", (_req, res) => {
  res.json({
    message: "Welcome to the Phasmobusters API",
  });
});

app.use("/api/v1", api);

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.use(notFound);
app.use(errorHandler);

export default app;
