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
    next();
});


const Doctor = mongoose.model("Doctor", doctorSchema);
export default Doctor;