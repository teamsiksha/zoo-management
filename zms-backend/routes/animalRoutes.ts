import express from "express";
import { createAnimal, getAnimals, getAnimalById, updateAnimal, deleteAnimal } from "../controllers/animal.controller";
import { adminMiddleware } from "../middleware/authMiddleware";

const animalRoutes = express.Router();

animalRoutes.post("/create", adminMiddleware, createAnimal);
animalRoutes.get("/get",  getAnimals);
animalRoutes.get("/get/:id",  getAnimalById);
animalRoutes.put("/update/:id", adminMiddleware, updateAnimal);
animalRoutes.delete("/delete/:id", adminMiddleware, deleteAnimal);

export default animalRoutes;