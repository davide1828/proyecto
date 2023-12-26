<<<<<<< HEAD
const { model, Schema } = require("mongoose");
=======
const { Schema, model } = require('mongoose');
>>>>>>> b8afbf1950ded3083a96d72e6fca1f7c6ec3b317

const ProyectoSchema = Schema({
    numero: {
        type: String,
<<<<<<< HEAD
        required: true,
        unique:[true, 'numero es unico.'],
    },
    titulo: {
        type: String,
        required: true,
    },
    fechaIniciacion: {
        type: Date,
        required: true,
    },
    fechaEntrega: {
        type: Date,
        required: true,
    },
    valor: {
        type: Number,
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
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',//tomado del model de cliente, tiene que ser igual
=======
        required: [true, 'Debe colocar un número'],
        unique: [true, 'El número debe ser único']
    },
    // TODO: resto de atributos
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
>>>>>>> b8afbf1950ded3083a96d72e6fca1f7c6ec3b317
    },
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
<<<<<<< HEAD
    },
    universidad: {
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
    },
    etapa: {
        type: Schema.Types.ObjectId,
        ref: 'Etapa',
    },
});
module.exports = model('Proyecto', ProyectoSchema);
=======
        required: true
    }
    // TODO: resto de objetos tipo Modelo
});

module.exports = model('Proyecto', ProyectoSchema);
/*
{
    "numero": "",
    "cliente": {
        _id: ""
    },
    "tipoProyecto": {
        _id: ""
    }
}*/
>>>>>>> b8afbf1950ded3083a96d72e6fca1f7c6ec3b317
