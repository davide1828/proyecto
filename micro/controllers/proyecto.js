
const { request, response } = require('express');
const Proyecto = require('../models/proyecto');
const Cliente = require('../models/cliente')
<<<<<<< HEAD
const TipoProyecto = require('../models/tipoProyecto');
const Etapa = require('../models/etapa');
const proyecto = require('../models/proyecto');

=======
const TipoProyecto = require('../models/tipoProyecto')
>>>>>>> b8afbf1950ded3083a96d72e6fca1f7c6ec3b317
/**
 * crear
 */
const createProyecto = async (req = request, res = response) => {
    try{
<<<<<<< HEAD
         const { cliente, tipoProyecto,numero,titulo,fechaIniciacion,fechaEntrega,valor,Etapa} = req.body;
=======
         const { cliente, tipoProyecto, ...resto } = req.body;
>>>>>>> b8afbf1950ded3083a96d72e6fca1f7c6ec3b317
         console.log(req.body)
         const tipoProyectoBD = await TipoProyecto.findOne({
            _id: tipoProyecto._id
        });
        if(!tipoProyectoBD){
            return res.status(400).json({
                msj: 'No existe tipo Proyecto'
            })
        }
        const clienteBD = await Cliente.findOne({
            _id: cliente._id
        });
        if(!clienteBD){
            return res.status(400).json({
                msj: 'No existe cliente'
            })
        }
        // TODO: VALIDAR los demas modelos
         const proyecto = new Proyecto(req.body);
         await proyecto.save();
         return res.status(201).json(proyecto);
     }catch(e){
         return res.status(500).json({
             msj: e
         });
     }
 }
 
/**
 * Consultar todos
 */
const getProyectos = async (req, res = response) => {
    try{
        const proyectosBD = await Proyecto.find()
        .populate({
            path: 'cliente'
        })
        .populate({
            path: 'tipoProyecto'
        })
<<<<<<< HEAD
        /*.populate({
            path: 'universidad'
        })
        .populate({
            path: 'titulo'
        })
        .populate({
            path: 'etapa'
        })
        .populate({
            path: 'valor'
        }) */
        .populate({
            path: 'numero'
        })
        /*.populate({
            path: 'fechaEntrega'
        })*/
=======
>>>>>>> b8afbf1950ded3083a96d72e6fca1f7c6ec3b317
        // TODO: Colocar resto de populate
        return res.json(proyectosBD);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

/**
 * Consultar por ID
 */
 const getProyectoByID = async (req = request, res = response) => {
<<<<<<< HEAD
    try{
        const { id } = req.params;
        const query = { _id: id};
        const proyectoBD = await proyecto.findOne(query).populate({
=======
   /* try{
        const { id } = req.params;
        const query = { _id: id};
        const inventarioBD = await Inventario.findOne(query).populate({
>>>>>>> b8afbf1950ded3083a96d72e6fca1f7c6ec3b317
            path: 'usuario',
            match: { estado: true }
        });
        // TODO: personalizar error de no encontrado
<<<<<<< HEAD
        res.json(proyectoBD);
=======
        res.json(inventarioBD);
>>>>>>> b8afbf1950ded3083a96d72e6fca1f7c6ec3b317
    }catch(e){
        return res.status(500).json({
            error: e
        })
<<<<<<< HEAD
    }
}

// actualizar por ID
const updateProyecto = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const data = req.body;// destructuring, spread (...)
    
        const proyectoBD = await proyecto.findOne({ _id: id});
       // TODO: VALIDAR QUE EXISTEN Y ESTAN ACTIVOS: ESTADO, USUARIO, MARCA, ...
       if(!proyectoBD){
        return res.status(400).json({
            msj: 'No existe este proyecto'
        });
       } 
        const proyecto = await Proyecto.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(Proyecto);
=======
    }*/
}

// actualizar por ID
const updateInventario = async (req = request, res = response) => {
   /* try{
        const { id } = req.params;
        const data = req.body;// destructuring, spread (...)
    
        const inventarioBD = await Inventario.findOne({ _id: id});
       // TODO: VALIDAR QUE EXISTEN Y ESTAN ACTIVOS: ESTADO, USUARIO, MARCA, ...
       if(!inventarioBD){
        return res.status(400).json({
            msj: 'No existe este inventario'
        });
       } 
        const inventario = await Inventario.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(inventario);
>>>>>>> b8afbf1950ded3083a96d72e6fca1f7c6ec3b317
    }catch(e){
        return res.status(500).json({
            error: e
        });
<<<<<<< HEAD
    }
=======
    }*/
>>>>>>> b8afbf1950ded3083a96d72e6fca1f7c6ec3b317
}


module.exports = { 
    createProyecto,
<<<<<<< HEAD
    getProyectos,
    updateProyecto,
    getProyectoByID
=======
    getProyectos
>>>>>>> b8afbf1950ded3083a96d72e6fca1f7c6ec3b317
}