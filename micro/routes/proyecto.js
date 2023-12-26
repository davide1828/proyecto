const { Router } = require('express');
const { 
    createProyecto,
<<<<<<< HEAD
    getProyectos,
    updateProyecto,
    getProyectoByID
=======
    getProyectos
>>>>>>> b8afbf1950ded3083a96d72e6fca1f7c6ec3b317
} = require('../controllers/proyecto');

const router = Router();

/**
 * Obtiene todos 
 */
router.get('/', getProyectos);

/**
 * Obtiene por id
 */
<<<<<<< HEAD
router.get('/:id', getProyectoByID);
=======
// router.get('/:id', getInventarioByID);
>>>>>>> b8afbf1950ded3083a96d72e6fca1f7c6ec3b317

/**
 * Crear 
 */
router.post('/', createProyecto);

/**
 * Actualiza por id
 */
<<<<<<< HEAD
router.put('/:id', updateProyecto);
=======
//router.put('/:id', updateInventario);
>>>>>>> b8afbf1950ded3083a96d72e6fca1f7c6ec3b317


module.exports = router;