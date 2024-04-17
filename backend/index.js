//console.log("probando ando")
import express from "express";
import conectarDB from "./config/db.js";
import dotenv from 'dotenv'
import doctorRoutes from './routes/doctorRoutes.js'

const app = express()

dotenv.config();

conectarDB();

app.use("/",doctorRoutes);  //aqui había un error la ruta estaba mal

/*
app.use ("/",(req,res)=>{
    res.send("mi app funciona en el servidor")
});
*/

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`Servidor shi en el puerto ${PORT}`)
});

