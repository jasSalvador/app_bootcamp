//import express from "express";
import { goHome, tableBootcamp, goContacto, formEnrollments } from "../controllers/views.controller.js";


import {Router} from 'express';

const router = Router();


//const router = express.Router();
router.get('/', goHome);
router.get('/bootcamp', tableBootcamp);
router.get('/contacto', goContacto);
router.get('/enrollments', formEnrollments);




export default router;

