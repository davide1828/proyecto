
const { request, response } = require('express');
const clientes= require('../models/cliente');


// crear
const createCliente = async (
        req = request, res = response
    ) => {

    try{
        const  { nombre } = req.body
        const clienteBD = await cliente.findOne({ nombre });
        if(clienteBD){// ya existe el tipo Cliente
            return res.status(400).json({msg: 'Ya existe  El Cliente'});
        }
        const datos = {
            nombre
        };
        const cliente = new clientes(datos)

        await cliente.save()

        return res.status(201).json(cliente)
    }catch(e) {
        return res.status(500).json({mjs: e})
    }

 }

 
// consultar todos
const getClientes = async (req, res = response) => {
    try{
        const clientesBD = await TipoCliente.find()
        return res.json(clientesBD);
    }catch(e){
        return res.status(500).json({mjs: e})
    }

}

/**
 * Consultar por ID
 */
const getClientePorId = async (req = request, res = response) => {
    try{
        const { id }  = req.params;
        const query = { _id: id };
        const cliente = await clientes.findOne(query);
        return res.json(cliente);
    }catch(e){
        return res.status(500).json({msg: e});
    }
}

/**
 * Actualiza por ID
 */
const updateClientePorId = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const data = req.body;// destructuring, spread (...)
        data.fechaActualizacion = new Date()
        const cliente = await clientes.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(cliente);
    }catch(e){
        return res.status(500).json({msg: e});
    }
}

/**
 * Borrar por ID
 */
const deleteClienteByID = async (req = request, res = response) => {
   
  try{
    const id = req.params.id;
    const cliente = await clientes.findByIdAndDelete(id);
    res.status(204).json(cliente);

  } catch(e) {
    return res.status(500).json({msg: e});
  }
    
}


module.exports = {
    getClientes,
    createCliente,
    getClientePorId,
    updateClientePorId,
    deleteClienteByID
}