import express from 'express';
import {crearDoctor} from '../controllers/doctorControllers.js';
const router = express.Router();
//import { cdoctores } from '../controllers/doctorControllers.js';
//router.get("/", cdoctores);


router.get("/doctores", (req, res)=>{
    res.send("vista para doctores")
});

router.get("/logindoctores", (req, res)=>{
    res.send("vista para el login de los doctores")
});

router.post("/nuevodoc", crearDoctor);
export default router;