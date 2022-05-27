import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "2500mb" }));

export default app;