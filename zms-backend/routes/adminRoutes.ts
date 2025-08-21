import express from "express";
import { createAdmin, getAdmins, getAdminById, updateAdmin, deleteAdmin } from "../controllers/admin.controller";

const adminRoutes = express.Router();

adminRoutes.post("/create", createAdmin);
adminRoutes.get("/get", getAdmins);
adminRoutes.get("/get/:id", getAdminById);
adminRoutes.put("/update/:id", updateAdmin);
adminRoutes.delete("/delete/:id", deleteAdmin);

export default adminRoutes;