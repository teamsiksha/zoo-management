import "dotenv/config";
import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import adminRoutes from "./routes/adminRoutes";
import animalRoutes from "./routes/animalRoutes";
import ticketRoutes from "./routes/ticketRoutes";

const app = express();
const prisma = new PrismaClient();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/animal", animalRoutes);
app.use("/api/ticket", ticketRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  console.log("Prisma client connected to database");
});
