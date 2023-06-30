import express from "express";
import {
    createBootcamp, getBootcamp
} from "../controllers/bootcamp.controller.js";

const router = express.Router();


router.get("/", getBootcamp);
router.post("/", createBootcamp);


export default router;