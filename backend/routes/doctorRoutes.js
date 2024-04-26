import express from 'express'
const router = express.Router();
import {cdoctores} from '../controllers/doctorControllers.js';
import {crearDoctor} from '../controllers/doctorControllers.js';
import {registrar,perfil} from '../controllers/doctorControllers.js';



router.get("/login",(req,res)=>{
    res.send("desde la ruta /api/login")

});

router.post("/",registrar);
router.get("/perfil",perfil);


router.get("/", cdoctores);

router.get("/logindoctores",(req,res)=>{
    res.send("vista para el login de los doctores")
});

router.post("/registrardoc", crearDoctor); // ruta para crear un nuevo doctor por el metodo post

export default router;

//
