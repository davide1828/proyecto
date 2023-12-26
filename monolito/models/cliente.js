const { Schema, model } = require('mongoose');

const ClienteSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre es requerido']
    },
    email: {
        type: String,
        required: [true, 'Nombre es requerido'],
        unique: [true, 'Email debe ser único']
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
});

module.exports = model('Cliente', ClienteSchema);