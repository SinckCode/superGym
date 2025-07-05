const express = require('express');
const Service = require('../models/Service');
const router = express.Router();

// Obtener todos los servicios
router.get('/', async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los servicios.' });
    }
});

// Crear un nuevo servicio
router.post('/', async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        const service = new Service({ nombre, descripcion });
        await service.save();
        res.status(201).json(service);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el servicio.' });
    }
});

// Actualizar un servicio por ID
router.patch('/:id', async (req, res) => {
    try {
        const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(service);
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar el servicio.' });
    }
});

// Eliminar un servicio por ID
router.delete('/:id', async (req, res) => {
    try {
        await Service.findByIdAndDelete(req.params.id);
        res.json({ message: 'Servicio eliminado correctamente.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el servicio.' });
    }
});

module.exports = router;
