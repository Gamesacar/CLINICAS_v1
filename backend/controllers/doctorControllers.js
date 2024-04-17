import Doctor from '../models/Doctor.js';

const cdoctores = (req, res)=> {
    res.send("vista para doctores")
};
 
const crearDoctor = async (req, res) => {
    try {
        const {nombre, password, email, Celular, token, confirmado}=req.body;
        const nuevoDoctor = new Doctor({
            nombre,
            password,
            email,
            Celular,
            token,
            confirmado
        });
        const saveddoc = await nuevoDoctor.save();  
        // Enviar una respuesta exitosa
        res.status(201).json({ mensaje: "Nuevo doctor registrado exitosamente", doctor: saveddoc });
    } catch (error) {
        // Manejar errores
        console.error("Error al crear un nuevo doctor:", error);
        res.status(500).json({ error: "Ocurrió un error al crear un nuevo doctor" });
    }
};

export {
    cdoctores,crearDoctor
}

//
