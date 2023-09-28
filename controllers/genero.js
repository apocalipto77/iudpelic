const Genero = require('../models/genero')

const { request, response } = require ('express')

const createGenero = async (req = request, res = response) => {
    try {
        // Extrae los datos del cuerpo de la solicitud
        const { nombre, descripcion } = req.body;

        // Crea un nuevo género
        const nuevoGenero = new Genero({
            nombre,
            descripcion
        });

        // Guarda el nuevo género en la base de datos
        await nuevoGenero.save();

        res.json({ mensaje: 'Género creado correctamente', data: nuevoGenero });
    } catch (error) {
        console.error('Error al crear el género:', error);
        res.status(500).json({ mensaje: 'Error al crear el género' });
    }


}
const getGeneros = async (req = request, res = response) => {
    // Implementa la lógica para obtener todos los géneros de la base de datos
};

const getGeneroById = async (req = request, res = response) => {
    // Implementa la lógica para obtener un género por su ID
};

const updateGenero = async (req = request, res = response) => {
    // Implementa la lógica para actualizar un género
};

const deleteGenero = async (req = request, res = response) => {
    // Implementa la lógica para eliminar un género
};

module.exports = {
    createGenero,
    getGeneros,
    getGeneroById,
    updateGenero,
    deleteGenero
}