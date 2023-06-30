import express from "express";
import {
    createUser, findUserById, findAll
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", findAll);
router.post("/", createUser);
router.get("/:id", findUserById);


export default router;