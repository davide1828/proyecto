<<<<<<< HEAD
const { Schema, model} = require("mongoose");

const UniversidadSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
    },
    fechaCreacion: {
        type: Date,
        default: Date.now,
        required: true,
    },
    fechaActualizacion: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

module.exports = model("Universidad", UniversidadSchema);
=======
const { Schema, model } = require('mongoose');

const UniversidadSchema = Schema({

});

module.exports = model('Universidad', UniversidadSchema);
>>>>>>> b8afbf1950ded3083a96d72e6fca1f7c6ec3b317
