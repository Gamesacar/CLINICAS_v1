import express from 'express'
import {cpacientes,login,perfil} from '../controllers/pacientControllers.js';


const router = express.Router();



router.post('/registrarpaci', cpacientes);
router.get('/login', login);

router.get('/perfil', perfil);



export default router;

//
