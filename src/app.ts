import express, { Application } from "express";
import homeRoutes from "./routes/home.routers";
import loginRoutes from "./routes/auth.routers";
import morgan from "morgan";
import cors from "cors";

// settings
const app: Application = express();
app.set("port", 4000);
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: false, limit: "20mb" }));

// middlewares
app.use(morgan("dev"));
app.use(cors());

// routes
app.use("/api/", homeRoutes);
app.use("/auth/", loginRoutes);

export default app;
