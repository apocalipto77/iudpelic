const { Router} = require ('express')
const { createGenero, getGeneros, getGeneroById, updateGenero, deleteGenero } = require('../controllers/genero');


const router = Router() //Intancia de la clase

// Rutas
router.post('/', createGenero);
router.get('/', getGeneros);
router.get('/:id',getGeneroById);
router.put('/:id',updateGenero);
router.delete('/:id', deleteGenero);

module.exports = router;