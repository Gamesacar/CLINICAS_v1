import express from 'express'
const router = express.Router();
import {cdoctores} from '../controllers/doctorControllers.js';
import {crearDoctor} from '../controllers/doctorControllers.js';
router.get("/",(req,res)=>{
    res.send("vista doctores")
});

router.get("/", cdoctores);

router.get("/logindoctores",(req,res)=>{
    res.send("vista para el login de los doctores")
});

router.post("/registrardoc", crearDoctor); // ruta para crear un nuevo doctor por el metodo post

export default router;