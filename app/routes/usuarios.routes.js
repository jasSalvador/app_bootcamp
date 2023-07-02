import express from "express";
import {
    createUser, findUserById, findAll, updateUserById, changesStatus, deleteUserById
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", findAll);
router.post("/", createUser);
router.get("/:id", findUserById);
router.put("/:id", updateUserById);
router.delete("/:id", changesStatus); // soft-deletes
router.delete("/destroy/:id", deleteUserById);


export default router;