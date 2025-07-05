const express = require('express');
const Membership = require('../models/Membership');
const router = express.Router();

// Obtener todas las membresías
router.get('/', async (req, res) => {
    try {
        const memberships = await Membership.find();
        res.json(memberships);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las membresías.' });
    }
});

// Crear una nueva membresía
router.post('/', async (req, res) => {
    try {
        const { tipo, precio } = req.body;
        const membership = new Membership({ tipo, precio });
        await membership.save();
        res.status(201).json(membership);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear la membresía.' });
    }
});

// Actualizar una membresía por ID
router.patch('/:id', async (req, res) => {
    try {
        const membership = await Membership.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(membership);
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar la membresía.' });
    }
});

// Eliminar una membresía por ID
router.delete('/:id', async (req, res) => {
    try {
        await Membership.findByIdAndDelete(req.params.id);
        res.json({ message: 'Membresía eliminada correctamente.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la membresía.' });
    }
});

module.exports = router;
