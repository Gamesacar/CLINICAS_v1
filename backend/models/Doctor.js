import mongoose from 'mongoose';

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

    Celuar : {
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
    },
});

const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;