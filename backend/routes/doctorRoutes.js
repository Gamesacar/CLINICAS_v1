import express from 'express'
const router = express.Router();
//import {cdoctores} from '../controllers/doctorController.js'

router.get("/", );
router.get("/",(req,res)=>{
    res.send("vista para el login de los doctores")
});

export default router;