const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const users = await User.find().populate('membresia');
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios.' });
    }
});

// Crear un nuevo usuario
router.post('/', async (req, res) => {
    try {
        const { nombre, email, contraseña, membresia } = req.body;
        const user = new User({ nombre, email, contraseña, membresia });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el usuario.' });
    }
});

// Actualizar un usuario por ID
router.patch('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar el usuario.' });
    }
});

// Eliminar un usuario por ID
router.delete('/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'Usuario eliminado correctamente.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el usuario.' });
    }
});

module.exports = router;
