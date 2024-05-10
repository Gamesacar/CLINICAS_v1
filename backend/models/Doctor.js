import mongoose from 'mongoose';
import bcrypt from "bcrypt";


const doctorSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true,
        trim: true
    },

    password : {
        type: String,
        required: true
    },

    email : {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    Celular : {
        type: String,
        default: null,
        trim: true
    },

    token : {
        type: String,
    },

    confirmado : {
        type: Boolean,
        default: false
    }
});


// Antes de guardar, hashear el password
doctorSchema.pre("save", async function(next) {

    //obtengo el documento de doctor
    const doctor = this;

    if (!doctor.isModified("password")) {
        return next();
    }
    const hashedPassword = await bcrypt.hash(doctor.password, 10);
    //remplazo la contra por el hash
    doctor.password = hashedPassword;
    doctor.token = generarTokenNumerico()
    next();
});

const generarTokenNumerico = () => {
    const min = 100000; // Número mínimo de 6 dígitos
    const max = 999999; // Número máximo de 6 dígitos
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Doctor = mongoose.model("Doctor", doctorSchema);
export {

    Doctor,doctorSchema
}


