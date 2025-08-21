import express from "express";
import { createTicket, getTickets, getTicketById, updateTicket, deleteTicket } from "../controllers/ticket.controller";
import { adminMiddleware } from "../middleware/authMiddleware";
const ticketRoutes = express.Router();

ticketRoutes.post("/create", createTicket);
ticketRoutes.get("/get", adminMiddleware, getTickets);
ticketRoutes.get("/get/:id", getTicketById);
ticketRoutes.put("/update/:id", updateTicket);
ticketRoutes.delete("/delete/:id", deleteTicket);

export default ticketRoutes;