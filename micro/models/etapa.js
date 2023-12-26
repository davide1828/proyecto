<<<<<<< HEAD
const { model, Schema } = require("mongoose");

const EtapaSchema = Schema({
    nombre: {
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

module.exports = model("Etapa", EtapaSchema);
=======
const { Schema, model } = require('mongoose');

const EtapaSchema = Schema({

});

module.exports = model('Etapa', EtapaSchema);
>>>>>>> b8afbf1950ded3083a96d72e6fca1f7c6ec3b317
