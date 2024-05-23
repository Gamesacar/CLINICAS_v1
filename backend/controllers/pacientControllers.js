import {Pacient} from '../models/Pacient.js';
import bcrypt from 'bcrypt';


const cpacientes = async (req, res) => {
    try {
      // Verificarmo si el usuario ya está registrado en la base de datos
      console.log(req.body)

      const { email ,password} = req.body;

      const existingPacient = await Pacient.findOne({ email });
      const existingPacient_pass = await Pacient.findOne({ password });


      if (existingPacient && existingPacient_pass) {
        // Si el usuario ya existe, con esta función se envía un mensaje de error 400
        return res.status(400).json({ mensaje: 'El usuario ya está registrado en la base de datos y las contraseñas coinciden' });
    }
 
    
      // Si el usuario no está registrado, creamos uno nuevo
      const pacient = new Pacient(req.body); 
      await pacient.save(); 
  
      res.json({ mensaje: 'Registrando un nuevo Paciente' });

    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Hubo un error' });
    }
  };
  

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
      // Buscar el paciente por correo electrónico
      const paciente = await Pacient.findOne({ email });

      if (!paciente) {
          return res.status(400).json({ mensaje: 'El paciente no existe' });
      }

      // Verificar la contraseña
      const passwordMatch = await bcrypt.compare(password, paciente.password);

      if (!passwordMatch) {
          return res.status(400).json({ mensaje: 'Contraseña incorrecta' });
      }

      res.json({ mensaje: 'Inicio de sesión exitoso', nombre: paciente.nombre });
  } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Hubo un error al iniciar sesión' });
  }
};


const perfil = (req, res)=> {
    res.json({msg:"desde la ruta /api/pacientes/perfil"})
};





export {
    cpacientes,login,perfil
}