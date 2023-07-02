import express from "express";
import {createBootcamp, findAll, addUser, findById} from "../controllers/bootcamp.controller.js";

const router = express.Router();

router.get("/", findAll);
router.get("/:id", findById);
router.post("/", createBootcamp);
router.post("/vinculate", addUser);

export default router;

